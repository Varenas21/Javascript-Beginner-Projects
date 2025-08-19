/* 2025 VALERIA ARENAS - BASICS IN JAVASCRIPT */
document.getElementById('TStartBtn').addEventListener("click", ButtonHandler);
document.getElementById('TResetBtn').addEventListener("click", ButtonHandler);
document.getElementById('TStopBtn').addEventListener("click", ButtonHandler);

const UI_THOURS = parseInt(document.getElementById('UserHours').value) || 0;
const UI_TMINUTES = parseInt(document.getElementById('UserMinutes').value) || 0;
const UI_TSECS = parseInt(document.getElementById('UserSeconds').value) || 0;

document.getElementById('SWStartBtn').addEventListener("click", ButtonHandler);
document.getElementById('SWResetBtn').addEventListener("click", ButtonHandler);
document.getElementById('SWStopBtn').addEventListener("click", ButtonHandler)

const TIMER_DISPLAY = document.getElementById('TimerDisplay');
const STOPWATCH_DISPLAY = document.getElementById('SWDisplay');

let countdownInterval;
let countInterval;
let totalSeconds = 0;
let isRunning = false;

// Change every 10000 seconds
function SetClock() {
    const TIMER = new Date();

    let hours = TIMER.getHours();
    let minutes = TIMER.getMinutes();
    let seconds = TIMER.getSeconds();
    let days = TIMER.getDate();
    let months = TIMER.getMonth() + 1;
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

function ButtonHandler(event) {
    const buttonId = event.target.id;

    switch (buttonId) {
        case "TStartBtn":
            StartTimer(UI_THOURS, UI_TMINUTES, UI_TSECS);
            break;
        case "SWStartBtn":
            StartStopWatch();
            break;
        case "TResetBtm":
        case "SWResetBtn":
            Reset(buttonId);
            break;
        case "TStopBtn":
        case "SWStopBtn":
            Stop(buttonId);
            break;
        default:
            console.warn("Unknown button clicked.");
    }
}

function Reset(buttonId) {
    if (buttonId === "SWResetBtn") {
        clearInterval(countInterval);
        isRunning = false;
        totalSeconds = 0;
        UpdateDisplaySW();
    }
    else if (buttonId === "TResetBtn") {
        clearInterval(countdownInterval);
        isRunning = false;
        totalSeconds = 0;
        UpdateDisplay();
    }
}

function Stop(buttonId) {
    if (buttonId === "SWStopBtn") {
        clearInterval(countInterval);
        isRunning = false;
    }
    else if (buttonId === "TStopBtn") {
        clearInterval(countdownInterval);
        isRunning = false;
    }
}

function StartStopWatch() {
    let hours = 0;
    let mins = 0;
    let secs = 0;
    totalSeconds = (hours * 3600) + (mins * 60) + secs;

    isRunning = true;
    UpdateDisplaySW();

    countInterval = setInterval(() => {
        if (totalSeconds >= 0) {
            totalSeconds++;
            UpdateDisplaySW();
        }
        else {
            clearInterval(countInterval);
            isRunning = false;
        }
    }, 1000);
}

function UpdateDisplaySW() {
    let hrs = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;

    STOPWATCH_DISPLAY.textContent = `${hrs.toString().padStart(2, '0')}::${mins.toString().padStart(2, '0')}::${secs.toString().padStart(2, '0')}`;
}

function StartTimer(hours, minutes, seconds) {
    if (!isRunning) {
        totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
        if (totalSeconds <= 0) {
            alert("Please enter a valid time");
            return;
        }

        isRunning = true;
        UpdateDisplay();

        countdownInterval = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                UpdateDisplay();
            }
            else {
                clearInterval(countdownInterval);
                isRunning = false;
                alert("Timer Finished!");

            }
        }, 1000);
    }

}

function UpdateDisplay() {
    let hrs = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;

    TIMER_DISPLAY.textContent = `${hrs.toString().padStart(2, '0')}::${mins.toString().padStart(2, '0')}::${secs.toString().padStart(2, '0')}`;
}