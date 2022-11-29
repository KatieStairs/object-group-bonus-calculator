// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
/*
{
  name: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 3
},

bonusPercent = .04 * annualSalary
*/


function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
let bonus=0;
if (employee.reviewRating <= 2){
  bonus += 0 
} if (employee.reviewRating === 3){
  bonus += .04 * employee.annualSalary
} if  (employee.reviewRating === 4){
  bonus += .06 * employee.annualSalary
} if (employee.employeeNumber.length === 4){
    bonus += .05 * employee.annualSalary
} return bonus
}

  // return new object with bonus results
  

/*
let employeeBonusInfo = [];

function bonusCalculator (name, bonusPercentage, totalCompensation, totalBonus){
  
  let calculatedEmployees= {
  theirName: name,
  theirBonusPercentage: bonusPercentage,
  theirTotalComp: totalCompensation,
  theirTotalBonus: totalBonus,
 }
  calculatedEmployees.push(employees);
  return calcutatedEmployees;
} 

console.log(bonusCalculator(employees[0]));
*/

console.log('atticus gets this bonus:', calculateIndividualEmployeeBonus(employees[0]));