'use strict';



// Task 7
const ref = {
    inputYearBirth: document.querySelector('.input-year-birth'),
    inputMonthBirth : document.querySelector('.input-month-birth'),
    inputFutureYear : document.querySelector('.input-year-future'),
    outputAge : document.querySelector('.display-age'),
    outputYearFuture : document.querySelector('.display-year-future'),
    btnAge : document.querySelector('.age-btn'),
}

const displayAge = () => { 
    // if (ref.inputMonthBirth.value <= 6) {
    //     ref.outputAge.textContent = ref.inputFutureYear.value - ref.inputYearBirth.value - 1;
    // } else { 
    //     ref.outputAge.textContent = ref.inputFutureYear.value - ref.inputYearBirth.value;
    // }
    ref.outputAge.textContent = ref.inputMonthBirth.value <= 6 ? ref.inputFutureYear.value - ref.inputYearBirth.value - 1 : ref.inputFutureYear.value - ref.inputYearBirth.value;
    
    ref.outputYearFuture.textContent = ref.inputFutureYear.value;
}

ref.btnAge.addEventListener("click", displayAge);




// Task 8

const refWeek = {
    inputDay : document.querySelector('.input-day'),
    btnTranslate: document.querySelector('.transl-btn'),
    outputDay : document.querySelector('.day-name-transl'),
}

const displayTranslation = () => { 
    console.log(8);
    const dayName = refWeek.inputDay.value.trim().toLowerCase();
    let dayTranslation = "";

    if (dayName == 'monday') { 
        dayTranslation = 'Montag';
    } else if (dayName == 'tuesday') { 
        dayTranslation = 'Dienstag';
    } else if (dayName == 'wednesday') { 
        dayTranslation = 'Mittwoch';
    } else if (dayName == 'thursday') { 
        dayTranslation = 'Donnerstag';
    } else if (dayName == 'friday') { 
        dayTranslation = 'Freitag';
    } else if (dayName == 'saturday') { 
        dayTranslation = 'Samstag';
    } else if (dayName == 'sunday') { 
        dayTranslation = 'Sonnstag';
    } else { 
        dayTranslation = 'Check the spelling of the day name';

    }
    
 
    refWeek.outputDay.textContent = `${dayTranslation}`;
}

refWeek.btnTranslate.addEventListener("click", displayTranslation);


// Task 9

const refNumber = {
    inputNumber : document.querySelector('.input-mystery'),
    btnCheckNum: document.querySelector('.mystery-btn'),
    outputNum : document.querySelector('.mystery-result'),
}
const mysteryNumber = Math.round(Math.random() * (100 - 1) + 1);
const displayMysteryResult = () => { 
    
    // console.log(mysteryNumber);
    const inputNumber = Number(refNumber.inputNumber.value);

    let output = refNumber.outputNum;
    
    if (Number.isNaN(inputNumber) === true) {
        output.textContent = "Ups! Type a number!";
    } else if (inputNumber > mysteryNumber) {
        output.textContent = "Try smaller number ...";
    } else if (inputNumber < mysteryNumber) {
        output.textContent = "Try bigger number ...";
    } else if (Number(refNumber.inputNumber.value) == mysteryNumber) {
        output.textContent = `Huhrra!! You did it! The number is ${mysteryNumber}`;
    }
}

refNumber.btnCheckNum.addEventListener("click", displayMysteryResult);





// Task10 

const btnOddEven = document.querySelector('.odd-even-btn');
const outputOddEven = document.querySelector('.odd-even-result');

const displayOddEven = () => {
    let number = Math.round(Math.random() * (100 - 1) + 1);
    if (number % 2 === 0) {
        outputOddEven.textContent = `${number} is even`;
    } else { 
        outputOddEven.textContent = `${number} is odd`;
    }
}


btnOddEven.addEventListener("click", displayOddEven);


let array = new Array(3);
console.log(array);