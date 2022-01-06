'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // The firstName is global variable and can be executed in function
  // console.log(firstName);

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Reassigning outer scope's variable
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
*/

/*
// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Andrius';
let job = 'coder';
const year = 1985;

// Functions
// Able to call before declaration
console.log(addDecl(2, 3));
// Cause variable const addExpr in TDZ
// console.log(addExpr(2, 3));
// Variable in TDZ - temp-death-zone
// console.log(addArrow(2, 3));
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
*/
/*
// Example
const numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

console.log(numProducts);

if (!numProducts) deleteShoppingCart();
*/
/*
var x = 1;
let y = 2; // have to be var to able to see in window object
const z = 3; // have to be var to able to see in window object

// Only x now able to see in console typed window (window object)
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined
};

calcAge(1985);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // window object
};
calcAgeArrow(1990);

const andrius = {
  year: 1985,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year); // same as andrius.year
  },
};
andrius.calcAge();

const matilda = {
  year: 2017,
};
// 'this' keyword pointed to the matilda object
matilda.calcAge = andrius.calcAge;
matilda.calcAge();

const f = andrius.calcAge;
f(); // undefined
*/

/*
// Avoid use 'var' and arrow function
// var firstName = 'Matilda';

const andrius = {
  firstName: 'Andrius',
  year: 1985,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // SOLUTION 1
    // const self = this; // self of that
    // const isMillenial = function () {
    //   console.log(self); // easy checked - is undefined
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // SOLUTION 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
andrius.greet();
andrius.calcAge();
*/

/*
// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// Keyword 'arguments' not allowed in arrow functions - error
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 6, 8);
*/

/*
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge); // not effected reassigned variable

const me = {
  name: 'Andrius',
  age: 30,
};

const friend = me; // pointed at the same object
friend.age = 27; // here are pointed both at same age value of 27

console.log('Friend', friend);
console.log('Me', me);
*/

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
// both variables point to the same object
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);
