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
    outputString.textContent = inputString.value == "" ? "Nothing" : inputString.value;
    outputLength.textContent = inputString.value.length;
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
// outputStory.textContent = `Timmie Willie is a ${inputAdjective.value} mouse who is accidentally taken to a city in a vegetable basket. When he wakes up, he finds himself at a party and makes a friend.`;


    if (inputNoun.value === "" || inputVerb.value === "" || inputAdverb.value === "" || inputAdjective.value === "") {
        outputStory.textContent = 'No story. You missed some words';
    } else { 
        outputStory.textContent = `Timmie Willie is a ${inputAdjective.value.toUpperCase()} ${inputNoun.value.toUpperCase()} who is ${inputAdverb.value.toUpperCase()} taken to a city in a vegetable basket. When he wakes up, he finds himself at a party and ${inputVerb.value.toUpperCase()} a friend.`;
        


    }
}

btnStory.addEventListener("click", displayStory);



