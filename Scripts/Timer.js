/* 2025 VALERIA ARENAS - BASICS IN JAVASCRIPT */
// TIMER

// Change every 10000 seconds
function SetClock() {
    const TIMER = new Date();

    let hours = TIMER.getHours();
    let minutes = TIMER.getMinutes();
    let seconds = TIMER.getSeconds();
    let days = TIMER.getDate();
    let months = TIMER.getMonth() + 1; // January is 0, need to add 1 to get current month
    let years = TIMER.getFullYear();

    let timeSession = "AM";
    if (hours === 0) { hours = 12; } // Change to be not 24 hour clock
    if (hours > 12) { hours -= 12; timeSession = "PM" } //Subtract from 12 hours EX: 13 - 12 = 1 PM

    hours = (hours < 10) ? "0" + hours : hours; //If the hours are less than 10 then add a 0 (01: 02 PM)
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    const TIME_STRING = `${hours}::${minutes}::${seconds} ${timeSession} ${months}/${days}/${years}`;
    document.getElementById('TimeDate').innerHTML = TIME_STRING;
}
SetClock();
setInterval(SetClock, 1000);

// TIMER
