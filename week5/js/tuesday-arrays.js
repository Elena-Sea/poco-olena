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
    // console.log(str);
}


const myRecipe = {
    title: 'Merenga roulade',
    servings: 6,
    ingredients: [' Egg white', ' Sugar', ' Merenga roulade', ' Lemon '],
}

// console.log(`My Recipe is ${ myRecipe.title}. The serving number is: ${ myRecipe.servings}. And you can make it from the next ingredients: ${ myRecipe.ingredients}.`);



// frieday

let box = document.createElement("div");
let node = document.createTextNode("Some new text");
let parent = document.querySelector("#demo");
let nextNode = document.createTextNode("Next new text");
let smallBox = document.createElement("div");
let smallSmallBox = document.createElement("div");



box.appendChild(node);
box.appendChild(nextNode);

parent.appendChild(box);

// box.insertAdjacentElement('beforeend', smallBox);
// box.insertAdjacentElement('afterbegin', smallSmallBox);
box.appendChild(smallBox);
box.appendChild(smallSmallBox);


smallBox.appendChild(nextNode);


box.style.width = '300px';
box.style.height = '300px';
box.style.backgroundColor = 'tomato';
box.style.color = 'white';
box.style.fontSize = '24px';

smallBox.style.width = '100px';
smallBox.style.height = '100px';
smallBox.style.backgroundColor = 'yellow';
smallBox.style.color = 'green';
smallBox.style.fontSize = '18px';

smallSmallBox.style.width = '50px';
smallSmallBox.style.height = '50px';
smallSmallBox.style.backgroundColor = 'green';
smallSmallBox.style.color = 'yellow';
smallSmallBox.style.fontSize = '16px';





const titleEx1 = document.querySelector('.title-for-ex1');
const paragraphEx1 = document.querySelector('.paragraph-for-ex1');
const linkEx1 = document.querySelector('.link-for-ex1');


const btnEx1 = document.querySelector('.btn-for-ex1');

function onClickIteration() { 
    titleEx1.innerHTML = "I'm a title for exercise 1";
    for (let i = 0; i < 2; i += 1) { 
        let titleContent = ` "i - ${i + 1}" `
        titleEx1.insertAdjacentHTML('beforeend', titleContent);
    }

    paragraphEx1.innerHTML = "I'm a paragraph for exercise 1";
    for (let i = 0; i < 4; i += 1) { 
        let paragraphContent = ` "i - ${i + 1}" `
        paragraphEx1.insertAdjacentHTML('afterbegin', paragraphContent);
    }

    linkEx1.innerHTML = "I'm a link for exercise 1";
    for (let i = 0; i < 7; i += 1) { 
        let linkContent = ` "i - ${i + 1}" `
        linkEx1.innerHTML = linkContent;
    }
}

btnEx1.addEventListener('click', onClickIteration);



var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false, 
    image: './images/norman-design.jpeg',
    linkToBuy: 'https://www.amazon.com/Design-of-Everyday-Things-audiobook/dp/B07L5Y9HND',
  }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    image: './images/brian-heman.jpeg',
    linkToBuy: 'https://www.amazon.com/Design-of-Everyday-Things-audiobook/dp/B07L5Y9HND',
  }
];

const booksContainer = document.querySelector('.exercise-book-list');
let bookParagraph = document.createElement('p');
booksContainer.appendChild(bookParagraph);
bookParagraph.classList.add('book-para');
for (let book of books) {
    bookParagraph.innerHTML += `The title of the book, written by ${book.author}, is ${book.title} </br>`;
}

let bookList = document.createElement('ul');
bookList.classList.add('book-list');
booksContainer.appendChild(bookList);

const label = document.querySelector('label');

for (let book of books) {
    bookList.innerHTML += `<li class="book-info">
    <p>The title of the book, written by ${book.author}, is ${book.title}</p>
    <a href="${book.linkToBuy}" target="_blank">
    <img src="${book.image}" alt="The image of the book ${book.title}" width="100"/></a>
    <input type="checkbox" id="read-book" name="read-book" value="unread" aria-checked="false" onclick="changeCheckbox()">
    <label for="read-book">Not read jet</label>
    </li>`;

    // function changeCheckbox(event) {
    //     label.innerHTML = 'Already read';
    //     let checkbox = document.getElementById('read-book');
    //     switch(checkbox.getAttribute('aria-checked')) {
    //         case "true":
    //             label.innerHTML = 'Already read';
    //             break;
    //         case "false":
    //             checkbox.setAttribute('aria-checked', "true");
    //             break;
    //     }
    // }
}



