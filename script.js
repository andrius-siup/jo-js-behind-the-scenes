'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // The firstName is global variable and can be executed in function
  // console.log(firstName);

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Error if will be declared const
      output = 'NEW OUTPUT!';
    }
    // Error - cause const and let variables are block scope
    // console.log(str);
    console.log(millenial);
    // Error - function outside the block scope - only inside block
    // add(2, 3);
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
