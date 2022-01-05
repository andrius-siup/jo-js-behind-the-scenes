'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // The firstName is global variable and can be executed in function
  // console.log(firstName);

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge(); // Have to call in parent function

  return age;
}

const firstName = 'Andrius';
calcAge(1985);

// console.log(calcAge(1985));
