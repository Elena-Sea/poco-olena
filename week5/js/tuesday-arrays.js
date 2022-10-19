'use strict';

const ref = {
    inputYearBirth: document.querySelector('.input-birth-date'),
    inputWorkStartDate : document.querySelector('.input-work-start'),
    btnRetInfo : document.querySelector('.retirement-btn'),
    outputRetYear : document.querySelector('.display-ret-year'),
    outputRetAge : document.querySelector('.display-ret-year'),
    outputLeftYears : document.querySelector('.display-left-yeasr'),

}

const topChoiceArray = [
    ['green', 'blue', 'purple'],
    ['7', '13', '8'],
    ['Odessa', 'Kyiv', 'London'],

];

// console.log(`My #1 choice in colors is ${topChoiceArray[0][0]}.`);
// console.log(`My #1 choice in numbers is ${topChoiceArray[1][1]}.`);
// console.log(`My #2 choice in cities is ${topChoiceArray[2][1]}.`);



for (let i = 0; i < topChoiceArray.length; i++) {
    let suff;

    if (i == 0) {
        suff = "st";
    } else if (i == 1) {
        suff = "nd";
    } else if (i == 2) {
        suff = "rd";
    } else if (i > 2) {
        suff = "th";
    };

    let str = `My ${i + 1}${suff} choice is: `;

    for (let j = 0; j < topChoiceArray[i].length; j++){
        str += `${topChoiceArray[j][i]} `;
    }
    console.log(str);
}


const myRecipe = {
    title: 'Merenga roulade',
    servings: 6,
    ingredients: [' Egg white', ' Sugar', ' Merenga roulade', ' Lemon '],
}

console.log(`My Recipe is ${ myRecipe.title}. The serving number is: ${ myRecipe.servings}. And you can make it from the next ingredients: ${ myRecipe.ingredients}.`);
