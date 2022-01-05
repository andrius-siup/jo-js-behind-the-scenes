'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // The firstName is global variable and can be executed in function
  // console.log(firstName);

  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge(); // Have to call in parent function

  return age;
}

const firstName = 'Andrius';
calcAge(1985);

// console.log(calcAge(1985));

// Error - cause 'age' is local variable in calcAge function
// console.log(age);

// Error - cannot access to the child function
// printAge();
