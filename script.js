// TIMER
const TIMER = new Date();
const DATE = new Date();


function SetClock()
{
let hours = TIMER.getHours();
let minutes = TIMER.getMinutes();
let days = TIMER.getDay();
let months = TIMER.getMonth();
let years = TIMER.getFullYear();

    let timeSession = "AM";
    if (hours === 0){ hours = 12; } // Change to be not 24 hour clock
    if (hours > 12){hours = hours - 12; timeSession="PM"} //Subtract from 12 hours EX: 13 - 12 = 1 PM

    hours = (hours < 10) ? "0" + hours : hours; //If the hours are less than 10 then add a 0 (01: 02 PM)
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    const timeString = `${hours}:${minutes} ${timeSession} ${days}/${months}/${years}`;
    document.getElementById('TimeDate').innerHTML = timeString;
}
SetClock();
setInterval(SetClock, 1000); // Change every 10000 seconds
