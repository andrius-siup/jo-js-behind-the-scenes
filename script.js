'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName); // The firstName is global variable and can be executed in function
  return age;
}

const firstName = 'Andrius';
calcAge(1985);
