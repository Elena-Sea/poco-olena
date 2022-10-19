1) We need inputs: 
- what is the date of birth (input type="date")
- what age the person started to work (input type="number") (or exact date (input type="date")), there might be a choice to take one of the inputs
- in extanded virsion we can add input for different profession groups with different period of obligatory number of working years (<select></select>)

2) We give outputs:
- What is the work experience years amount
- how many years the person still needs to work
- the  date or year of possible retirement
- what age the person will be at the moment of possible retirement

3) The processes we need:
- to assign the date of birth to var birthDate
- to assign the date of work start to var workStartDate
OR to assign the age of work start to var workStartAge
- to set variable currentDate with the help of JS method getTime() - it will be in ms
- to assign the obligatory number of working years to var obligatoryWorkYears (e.g. 40years) (in extanded virsion it can be changed through select)
- to assigh the number of already passed woroking years to var passedWorkYears
- to get passedWorkYears = currentDate - workStartDate
OR (later) 
- to assigh the number of left woroking years to var leftWorkYears
- to get leftWorkYears = obligatoryWorkYears - passedWorkYears
- to assigh the age of retirement to var retirementAge
- to assigh the current age to var currentAge
- to get retirementAge = leftWorkYears + currentAge
- to assigh the age of year to var retirementYear
- to get retirementYear = leftWorkYears + currentDate


