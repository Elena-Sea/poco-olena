const endTimerDisplay = document.querySelector('.timer-end');

const countMinutes = document.querySelector('span[data-minutes]');
const countSeconds = document.querySelector('span[data-seconds]');
const endMinutes = document.querySelector('span[end-minutes]');
const endSeconds = document.querySelector('span[end-seconds]');

// const buttons = document.querySelectorAll('buttons');

const btnFiveSec = document.querySelector('button[data-5-sec]');
const btnTwentySec = document.querySelector('button[data-20-sec]');
const btnFThirtySec = document.querySelector('button[data-30-sec]');

const btnWork = document.querySelector('button[data-work]');



let timerId = null;
let startTime = 0;
let deltaTime = 0;
let value = 0;

btnFiveSec.addEventListener('click', onRunTimer);
btnTwentySec.addEventListener('click', onRunTimer);
btnFThirtySec.addEventListener('click', onRunTimer);
btnWork.addEventListener('click', onRunTimer);

function runTimer() { 

    let currentTime = Date.now();
    deltaTime = (startTime + value) - currentTime;
    console.log(deltaTime); 

    if (deltaTime < 0) { 
        clearInterval(timerId);
        return;
    }
    updateTimer(convertMs(deltaTime));

    // const { minutes, seconds } = convertMs(deltaTime);
    // console.log(`${minutes} : ${seconds}`);
    // console.log(convertMs(deltaTime));
}

function runBigTimer() { 
    let newValue = value * 60000
    let currentTime = Date.now();

    deltaTime = (startTime + newValue) - currentTime;
    
    if (deltaTime < 0) { 
        clearInterval(timerId);
        return;
    }

    const { minutes, seconds } = convertMs(deltaTime);

    console.log(`${minutes} : ${seconds}`);
        console.log(minutes); 

    updateBigTimer(convertMs(deltaTime));

}

function updateTimer({ minutes, seconds }) { 
    countMinutes.textContent = minutes;
    countSeconds.textContent = seconds;
}

function updateBigTimer({ minutes, seconds }) { 
    countMinutes.textContent = minutes;
    countSeconds.textContent = seconds;
}

function setEndTime({ minutes, seconds }) { 
    endMinutes.textContent = minutes;
    endSeconds.textContent = seconds;
}

function onRunTimer(e) { 
    clearInterval(timerId);
    value = Number(e.currentTarget.value);
    console.log(value);
    startTime = Date.now() + 1000;
    console.log(startTime);

    if (value < 1000) {
        let displayTime = startTime + value * 60000;
        const { minutes, seconds } = convertMs(displayTime);
        console.log(convertMs(displayTime));
        setEndTime(convertMs(displayTime));

        console.log(`${minutes} : ${seconds}`);
        endTimerDisplay.classList.add('vissible');
        timerId = setInterval(runBigTimer, 1000);
    } else { 
    timerId = setInterval(runTimer, 1000);

    }
    // buttons.disabled = true;


    // let endTime = startTime + 5000;

    // setEndTime(convertMs(endTime));
}

function addsZero(content) { 
    return String(content).padStart(2, '0');
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addsZero(Math.floor(ms / day));
    const hours = addsZero(Math.floor((ms % day) / hour));
    const minutes = addsZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addsZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}