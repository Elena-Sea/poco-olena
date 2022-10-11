'use strict';

// Task 1
const inputName = document.querySelector('.input-js');

const outputName = document.querySelector('.output-span');
outputName.textContent = "Noname";
const outputNameGreeting = (e) => { 
    if (e.currentTarget.value === "") {
        outputName.textContent = "Noname";
        console.log('outputName.textContent');

    } else { 
        outputName.textContent = e.currentTarget.value;
    }
    return outputName.textContent;
}

inputName.addEventListener("input", outputNameGreeting);



// Task 2
const inputString = document.querySelector('.input-string');

const outputString = document.querySelector('.display-string');
const outputLength = document.querySelector('.display-length');

// const displayString = () => { 
//     outputString.textContent = inputString.value;
//     outputLength.textContent = inputString.value.length;
// }


const displayString = () => { 
    outputString.textContent = inputString.value.trim() == "" ? "Nothing" : inputString.value.trim();
    outputLength.textContent = inputString.value.trim().length;
}

inputString.addEventListener("input", displayString);
// displayString();

//  outputLength.textContent = outputString.textContent.length;
// outputLength.textContent = inputString.value.length;

// Task 3
const inputAuthor = document.querySelector('.input-author');
const inputQuote = document.querySelector('.input-quote');
const outputAuthor = document.querySelector('.display-author');
const outputQuote = document.querySelector('.display-quote');
const btnQuote = document.querySelector('.author-btn');


const displayAuthorQuote = () => { 
    if (inputAuthor.value !== "" || inputQuote.value !== "") {
        outputAuthor.textContent = inputAuthor.value;
        outputQuote.textContent = inputQuote.value;
    }
}

btnQuote.addEventListener("click", displayAuthorQuote);



// Task 4
const inputNoun = document.querySelector('.input-story.noun');
const inputVerb = document.querySelector('.input-story.verb');
const inputAdverb = document.querySelector('.input-story.adverb');
const inputAdjective = document.querySelector('.input-story.adjective');
const btnStory = document.querySelector('.story-btn');
const outputStory = document.querySelector('.output-story');

const displayStory = () => { 


    if (inputNoun.value === "" || inputVerb.value === "" || inputAdverb.value === "" || inputAdjective.value === "") {
        outputStory.textContent = 'No story. You missed some words';
    } else { 
        outputStory.textContent = `Timmie Willie is a ${inputAdjective.value.toUpperCase()} ${inputNoun.value.toUpperCase()} who is ${inputAdverb.value.toUpperCase()} taken to a city in a vegetable basket. When he wakes up, he finds himself at a party and ${inputVerb.value.toUpperCase()} a friend.`;
        
    }
}

btnStory.addEventListener("click", displayStory);



// Task 5

const array = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    ['@', '-', '_', ]
];
// console.log(array[1][3]);
// console.log(Math.round(Math.random() * (2 - 0) + 1));
// console.log(Math.random() * (10 - 1) + 1);
const inputPassword = document.querySelector('.input-password');
const outputPassword = document.querySelector('.output-password');
const btnPassword = document.querySelector('.password-btn');
let a;
let b;

const displayPassword = () => { 
    const password = [];
    for (let i = 0; i < inputPassword.value; i += 1) {
        a = Math.round(Math.random() * (4 - 1));
        // if (a === 0) { 
        //     b = Math.round(Math.random() * (9 - 1) + 1);
        // } else if (a === 1) { 
        //     b = Math.round(Math.random() * (25 - 1) + 1);
        // } else if (a === 2) { 
        //     b = Math.round(Math.random() * (25 - 1) + 1);
        // } else if (a === 3) { 
        //     b = Math.round(Math.random() * (3 - 1));
        // } 

        switch (a) { 
            case 0:
                b = Math.round(Math.random() * (9 - 1) + 1);
                break;
            case 1:
                b = Math.round(Math.random() * (25 - 1) + 1);
                break;
            case 2:
                b = Math.round(Math.random() * (25 - 1) + 1);
                break;
            case 3:
                b = Math.round(Math.random() * (3 - 1));
                break;
        } 

        // console.log(`They are: ${a} and ${b}`);
        password.push(array[a][b]);
        // console.log(password);
        outputPassword.textContent = password.join("");
        // console.log(password.join(""));
    }
    // console.log(password);
}

btnPassword.addEventListener("click", displayPassword);




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
const DEBOUNCE_DELAY = 300;

const refFortune = {
    outputFortune : document.querySelector('.display-fortune'),
    btnFortune : document.querySelector('.fortune-btn'),
}

const fortune = [
    ["to Supermarket", "to Zoo", "home"],
    ['eat a chocolate icecream', 'drink a cup of coffee', 'eat Pizza'],
    ['Angelina Jolly','Your Granny','A big Mouse'],
];



const displayFortune = () => { 
    const b = Math.round(Math.random() * (3 - 1));
    const c = Math.round(Math.random() * (3 - 1));
    const d = Math.round(Math.random() * (3 - 1));
    refFortune.outputFortune.textContent = `Okey, so today afternoon you will go ${fortune[0][b].toUpperCase()}, there you ${fortune[1][c].toUpperCase()} and there you will meet ${fortune[2][d].toUpperCase()}!`;
}

refFortune.btnFortune.addEventListener("click", displayFortune);
