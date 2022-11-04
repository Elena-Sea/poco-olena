// by separate variables

const baseSalary = 1000;
const overtime = 10;
const rate = 10;
let employeeSalary;

const getWage = (baseSalary, overtime, rate) => {
    employeeSalary = baseSalary + overtime * rate;
    return employeeSalary;
};

console.log('BY separate variables The salary is ' + getWage(baseSalary, overtime, rate));







// by creating an object
let employees = [];

const employeeA = {
  baseSalary: 2000,
  overtime: 20,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};
employees.push(employeeA);

const employeeA2 = {
  baseSalary: 1500,
  overtime: 7,
  rate: 5,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};
employees.push(employeeA2);
console.log('BY creating an objectThe salary of emplA is ' + employeeA.getWage());
console.log(employees);






// by creating an object from the Prototype

const employeeB = Object.create(employeeA);
console.log(employeeA.isPrototypeOf(employeeB));

console.log('The basic salary of emplB is ' + employeeB.baseSalary);
console.log('The salary of emplB is ' + employeeB.getWage());
employeeB.overtime = 30;
console.log('The salary of emplB is ' + employeeB.getWage());
employeeB.bonus = 500;
console.log(employeeB.bonus);
employeeB.total = employeeB.getWage() + 500;

console.log(employeeB);

const employeeBKeys = Object.keys(employeeB);
console.log(employeeBKeys);







// by Class

class Stuff {
    baseSalary = 3000;
    overtime = 30;
    rate = 30;
    getWage() {
      return this.baseSalary + this.overtime * this.rate;
    };
};
console.log(Stuff); 

const employeeC = new Stuff();
console.log('The salary of EMPL-C is ' + employeeC.getWage()); 
console.log(employeeC); 
const employeeC2 = new Stuff();
employeeC2.overtime = 50;
console.log('The salary of EMPL-C2 is ' + employeeC2.getWage()); 
console.log(employeeC2); 


// by Class defining constructor


class StuffA {
    baseSalary;
    overtime;
    rate;

    constructor({ baseSalary, overtime, rate }) {
    this.baseSalary = baseSalary;
    this.overtime = overtime;
    this.rate = rate;
  }

    getWage() {
      return this.baseSalary + this.overtime * this.rate;
    };
}


const employeeD = new StuffA({
    baseSalary: 5000,
    overtime: 0,
    rate: 0,
});
console.log(employeeD.getWage()); 
console.log(employeeD);

const newEmployeeD = new StuffA({
    baseSalary: 2500,
    overtime: 5,
    rate: 5,
});
console.log(newEmployeeD.getWage()); 
console.log(newEmployeeD);





























// const form = document.querySelector('.form');
// const surnameInput = document.querySelector('.surname');
// const salaryInput = document.querySelector('.surname');
// const overtimeInput = document.querySelector('.overtime');
// const coefficientInput = document.querySelector('.coefficient');
// const tableOutput = document.querySelector('tbody');



// form.addEventListener('click', markup);
// tableOutput.insertAdjacentHTML('beforeend', markup());
// function markup() { 
//     const getSurname = surnameInput.value;
//     console.log(getSurname);
//     const getSalary = salaryInput.value;
//     console.log(getSalary);
//     const getOvertime = overtimeInput.value;
//     const getCoefficient = coefficientInput.value;
//     return `<tr>
//                 <td>${getSurname}</td>
//                 <td>${getSalary}</td>
//                 <td>${getOvertime}</td>
//                 <td>${getCoefficient}</td>
//                 <td>7500</td>
//             </tr>`
// }




// function markupTeamGallery(minions) { 
// 	ref.teamGallery.innerHTML = "";
//     ref.teamGallery.insertAdjacentHTML('beforeend', minions.map(minion => { 
//         return `<tr>
//                     <td>Johnson</td>
//                     <td>7000</td>
//                     <td>10</td>
//                     <td>50</td>
//                     <td>7500</td>
//                 </tr>`
//     }).join('')
//     );
// }





// form.addEventListener('submit', getPromiseResult);

// function getPromiseResult(e) {
//     e.preventDefault();
//     let promiseFirstDelay = Number(e.currentTarget.delay.value);
//     const promiseDelayStep = Number(e.currentTarget.step.value);
//     const promiseAmount = Number(e.currentTarget.amount.value);

//     for (let i = 0; i < promiseAmount; i += 1) {
//         if (i > 0) {
//             promiseFirstDelay += promiseDelayStep;
//         }
//     }
// }


