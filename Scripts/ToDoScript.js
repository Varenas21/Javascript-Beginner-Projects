//2025 VALERIA ARENAS - BASICS IN JAVASCRIPT

// TO-DO LIST
// Creating a new list, when the button is clicked, it will create a new object and add to that list.
// Will create a nested object list, it will get the name AND will iterate through the list of items that are nested

let count = 0;
const CREATE_BUTTON = document.getElementById('createBtn'); // Cannot use querySelector but is the modern commonly used (Google)
const LIST_CONTAINER = document.getElementById('ListContainer');


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

    const CARD = document.createElement('div');
    CARD.classList.add('card-column', 'div-titles');

    //List name, Creates a div for the title and name
    const LIST_TITLE = document.createElement('h2');
    LIST_TITLE.textContent = newList.ListName;

    const CONTAINER = document.createElement('div');
    CONTAINER.classList.add('div-container');

    //Empty ul for future items
    const UL = document.createElement('ul');
    UL.style.listStyleType = "decimal";
    UL.style.listStyleType = "disc";
    UL.style.paddingLeft = "20px";
    UL.style.textAlign = "left";

    //Placeholder for empty list
    const PLACE_HOLDER = document.createElement('li');
    PLACE_HOLDER.textContent = "No items yet!";
    PLACE_HOLDER.style.color = 'red';
    PLACE_HOLDER.style.alignContent = 'center';
    UL.appendChild(PLACE_HOLDER);

    // ADD ITEMS BUTTON
    const ADD_BUTTON = document.createElement('button');
    ADD_BUTTON.textContent = "Add Item";

    ADD_BUTTON.addEventListener('click', function () {

        let userPromptItem = prompt("Please enter the name of your item", "Item Name");

        let itemText = (userPromptItem === null || userPromptItem.trim() === "") ? "No item specified!" : userPromptItem.trim();

        if (UL.contains(PLACE_HOLDER)) { UL.removeChild(PLACE_HOLDER); }

        newList.ListItems.push(itemText); // If its an array use push, otherwise add it as newList.ListItems[Item] = itemText;
        const LI = document.createElement('li');
        LI.textContent = itemText;
        const COMPLETE_ITEM = document.createElement('button');
        COMPLETE_ITEM.style.float = 'right';
        UL.appendChild(LI);
        UL.appendChild(COMPLETE_ITEM);

        // COMPLETE ITEM
        let isComplete = false;
        COMPLETE_ITEM.addEventListener('click', () => {
            isComplete = true;
            if (isComplete === true) {
                LI.style.color = 'lime';
                COMPLETE_ITEM.disabled = true;
                COMPLETE_ITEM.style.backgroundColor = 'indigo';
  
            }
        });
    });

    // DELETE LIST BUTTON
    const DELETE_BUTTON = document.createElement('button');
    DELETE_BUTTON.textContent = "Delete List";
    DELETE_BUTTON.addEventListener('click', () => { if (confirm(`Delete "${newList.ListName}"?`)) { CARD.remove(); }});

    // Combine Card Together
    CONTAINER.appendChild(UL);    
    CONTAINER.appendChild(ADD_BUTTON);
    CONTAINER.appendChild(DELETE_BUTTON);
    CARD.appendChild(LIST_TITLE);
    CARD.appendChild(CONTAINER);
    LIST_CONTAINER.appendChild(CARD);
});
