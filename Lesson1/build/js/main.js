"use strict";
let username = 'jaseel';
console.log(`Hello ${username}`);
let a = 6;
let b = '2';
let c = a / 2;
console.log(c);
// implicit type
let myName;
myName = 'Jaseel';
// This is legal in javascript but not typescript
// myName = 24
// explicit type
let myAge = 24;
// If the type is any then it can be anything
let album = 'The Wall';
album = 24;
// function example
// if you don't specify the paramter type then it will be any
const sum = (a, b) => {
    return a + b;
};
// you can also create a union type
let postId = '123';
let isActive = true;
// create an example RegExp type
let regExp = /abc/;
// create an example array type
let myArray = [1, 2, 3];
// create an example tuple type
let myTuple = [1, '2'];
