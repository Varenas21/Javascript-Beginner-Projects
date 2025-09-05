//2025 VALERIA ARENAS - BASICS IN JAVASCRIPT

// TO-DO LIST
// Creating a new list, when the button is clicked, it will create a new object and add to that list.
// Will create a nested object list, it will get the name AND will iterate through the list of items that are nested

let count = 0;
const CREATE_BUTTON = document.getElementById('CreateBtn'); // Cannot use querySelector but is the modern commonly used (Google)
const LIST_CONTAINER = document.getElementById('ListContainer');


let allLists = JSON.parse(localStorage.getItem("lists")) || [];

function SaveLists() 
{
    localStorage.setItem("lists", JSON.stringify(allLists));
}

function RenderLists(newList) 
{
    const CARD = document.createElement('div');
    CARD.classList.add('cards-column', 'list-card');

    //List name, Creates a div for the title and name
    const LIST_TITLE = document.createElement('h2');
    LIST_TITLE.setAttribute("class", "list-title")
    LIST_TITLE.textContent = newList.ListName;

    const CONTAINER = document.createElement('div');
    CONTAINER.setAttribute("class", "card");

    //Empty ul for future items
    const UL = document.createElement('ul');
    UL.setAttribute("class", "list-ul")

    //Placeholder for empty list
    const PLACE_HOLDER = document.createElement('li');
    PLACE_HOLDER.setAttribute("class", "list-ul");
    PLACE_HOLDER.textContent = "No Items!";
    if (newList.ListItems.length === 0) { UL.appendChild(PLACE_HOLDER); }

    // ADD ITEMS BUTTON
    const ADD_BUTTON = document.createElement('button');
    ADD_BUTTON.setAttribute("class", "input-buttons")
    ADD_BUTTON.textContent = "Add Item";

    ADD_BUTTON.addEventListener('click', function () {

        if (newList.ListItems.length < 4) {
            let userPromptItem = prompt("Please enter the name of your item", "Item Name");

            let itemText = (userPromptItem === null || userPromptItem.trim() === "") ? "Unnamed Item" : userPromptItem.trim();

            if (UL.contains(PLACE_HOLDER)) { UL.removeChild(PLACE_HOLDER); }

            newList.ListItems.push({ text: itemText, complete: false }); // If its an array use push, otherwise add it as newList.ListItems[Item] = itemText;
            SaveLists();

            RenderItem(UL, newList, newList.ListItems.length - 1);
        }
    });

    // DELETE LIST BUTTON
    const DELETE_BUTTON = document.createElement('button');
    DELETE_BUTTON.setAttribute("class", "input-buttons")
    DELETE_BUTTON.textContent = "Delete List";
    DELETE_BUTTON.addEventListener('click', () => 
        {
         if (confirm(`Delete "${newList.ListName}"?`)) 
        { 
            CARD.remove();
            allLists = allLists.filter (l => l !== newList);
            SaveLists();
        } 
        });

        newList.ListItems.forEach((_, i) => RenderItem(UL, newList, i));

    // Combine Card Together
    CONTAINER.appendChild(UL);
    CONTAINER.appendChild(ADD_BUTTON);
    CONTAINER.appendChild(DELETE_BUTTON);
    CARD.appendChild(LIST_TITLE);
    CARD.appendChild(CONTAINER);
    LIST_CONTAINER.appendChild(CARD);
}

function RenderItem(UL, listObj, index) 
{
    const itemObj = listObj.ListItems[index];

    const LI = document.createElement('li'); // MAKING NEW LIST EACH TIME
    LI.textContent = itemObj.text;

    const COMPLETE_ITEM = document.createElement('button');
    COMPLETE_ITEM.textContent = "Complete"
    COMPLETE_ITEM.setAttribute("class", "complete-button");

    if (itemObj.complete) {
        LI.style.color = 'lime';
        COMPLETE_ITEM.disabled = true;
    }

    COMPLETE_ITEM.addEventListener('click', () => {
        itemObj.complete = true;
        LI.style.color = 'lime';
        COMPLETE_ITEM.disabled = true;
        SaveLists();
    });

    UL.appendChild(LI);
    UL.appendChild(COMPLETE_ITEM);


}

CREATE_BUTTON.addEventListener('click', function () {
    let newList = {
        ListName: "",
        ListItems:
            []
    };

    // Once the List is created the User will be asked to put a name to the list first
    let userPrompt = prompt("Please enter the name of your list", "List Name");

    newList.ListName = (userPrompt === null || userPrompt.trim() === "")
        ? "List " + ++count
        : userPrompt.trim();

    allLists.push(newList);
    SaveLists();

    RenderLists(newList);


});

window.addEventListener("load", () => {
    allLists.forEach(list => RenderLists(list));
});