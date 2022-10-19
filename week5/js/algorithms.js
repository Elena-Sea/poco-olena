'use strict';



// Task 1

const refHello = {
    selectorLang : document.querySelector('#lang'),
    outputTranslation: document.querySelector('.hello'),
}

function showHelloTranslation() { 

	if (refHello.selectorLang.value === "en") {
        refHello.outputTranslation.style.color = "teal";
	} else if (refHello.selectorLang.value === "de") {
        refHello.outputTranslation.textContent = "Hallo Welt!";
        refHello.outputTranslation.style.color = "tomato";
	} else if (refHello.selectorLang.value === "fr") {
        refHello.outputTranslation.textContent = "Bonjour le monde!";
        refHello.outputTranslation.style.color = "pink";
	}  else if (refHello.selectorLang.value === "ru") {
        refHello.outputTranslation.textContent = "Привет мир!";
        refHello.outputTranslation.style.color = "red";
	} else if (refHello.selectorLang.value === "uk") {
        refHello.outputTranslation.textContent = "Привіт світ!";
        refHello.outputTranslation.style.color = "blue";
	}
}

refHello.selectorLang.addEventListener("change", showHelloTranslation, false);


// Task 2

const refNum = {
    inputFirst: document.querySelector('.input-first'),
    inputSecond : document.querySelector('.input-second'),
    btnCheckNum: document.querySelector('.bignum-btn'),
    outputNum : document.querySelector('.bignum-result'),
}
const displayBignumResult = () => { 
    
    const firstNum = Number(refNum.inputFirst.value);
    const secondNum = Number(refNum.inputSecond.value);
    let output = refNum.outputNum;
    
    if (Number.isNaN(firstNum) === true || Number.isNaN(secondNum) === true) {
        output.textContent = "Ups! Type a number!";
    } else if (firstNum < 0 || secondNum < 0) {
        output.textContent = "Ups! Type a positive number!";
    } else if (firstNum > secondNum) {
        output.textContent = `You did it! The bigger number is ${firstNum} and the smaller number is ${secondNum}`;
    } else { 
        output.textContent = `And now... The bigger number is ${secondNum} and the smaller number is ${firstNum}`;
    }
}

refNum.btnCheckNum.addEventListener("click", displayBignumResult);





// Task 3
const ref = {
    inputYearBirth: document.querySelector('.input-birth-date'),
    inputWorkStartDate : document.querySelector('.input-work-start'),
    btnRetInfo : document.querySelector('.retirement-btn'),
    outputRetYear : document.querySelector('.display-ret-year'),
    outputRetAge : document.querySelector('.display-ret-year'),
    outputLeftYears : document.querySelector('.display-left-yeasr'),

}
const birthDate = new Date(ref.inputYearBirth.value);
    console.log(birthDate);
    const workStartDate = new Date(ref.inputWorkStartDate.value);
    console.log(workStartDate);
    const currentDate = new Date;
console.log(currentDate);
const obligatoryWorkYears = 40;

const displayRetInfo = () => { 
    
    const passedWorkYears = currentDate.getTime() - workStartDate.getTime();
    console.log(passedWorkYears);
    
    // ref.outputRetYear.textContent = ref.outputLeftYears.value;
}

ref.btnRetInfo.addEventListener("click", displayRetInfo);