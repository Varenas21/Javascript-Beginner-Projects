/* 2025 VALERIA ARENAS - BASICS IN JAVASCRIPT */
document.getElementById('TimerStartButton').addEventListener("click", startHandler);
document.getElementById('TimerResetButton').addEventListener("click", resetTimer);
document.getElementById('TimerStopButton').addEventListener("click", stopTimer);
document.getElementById('StopwatchStartButton').addEventListener("click", startHandler);
const TIMER_DISPLAY = document.getElementById('TimerDisplay');
let countdownInterval;
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

// START BUTTON
// Buttons will have the same function, only difference one will be adding time up the other will be going down
// User will be able to set the time they want

function startHandler(event) {
    const buttonId = event.target.id;

    switch (buttonId) {
        case "TimerStartButton":
            const UI_THOURS = parseInt(document.getElementById('UserHours').value) || 0;
            const UI_TMINUTES = parseInt(document.getElementById('UserMinutes').value) || 0;
            const UI_TSECS = parseInt(document.getElementById('UserSeconds').value) || 0;
            startTimer(UI_THOURS, UI_TMINUTES, UI_TSECS);
            break;
        case "StopwatchStartButton":
            startStopWatch();
            break;
        default:
            console.warn("Unknown start button clicked.");
    }
}


function startTimer(hours, minutes, seconds)
{    
   if(!isRunning)
    {
        totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
        if (totalSeconds <= 0)
        {
            alert("Please enter a valid time");
            return;
        }
        
        isRunning = true;
        UpdateDisplay();

        countdownInterval = setInterval(() => {
            if(totalSeconds > 0)
            {
                totalSeconds--;
                UpdateDisplay();
            }
            else
            {
                clearInterval(countdownInterval);
                isRunning = false;
                alert("Timer Finished!");

            }
        }, 1000);
    }
    
}

function UpdateDisplay()
{
    let hrs = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;

    TIMER_DISPLAY.textContent = `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2,'0')}`;
}

function resetTimer()
{
    clearInterval(countdownInterval);
    isRunning = false;
    totalSeconds = 0;
    UpdateDisplay();

}

function stopTimer()
{
    clearInterval(countdownInterval);
    isRunning = false;
}