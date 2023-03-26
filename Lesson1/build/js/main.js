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
let stringArr = ['a', 'b', 'c'];
let numberArr = [1, 2, 3, 'jaseel'];
let booleanArr = [true, false, true];
stringArr.push(2);
// this will throw an error because the array is a string array
stringArr[0] = 2;
numberArr[0] = 'me';
// this is fine because the array is a number or string array
stringArr = numberArr;
// this will throw an error because the array is a string array
numberArr = stringArr;
// this is fine because the array is a number or string array
// create an emepty array
let test = [];
let band = [];
let myTuple = [1, '2', true];
let mixed = ['hello', 1, true];
mixed = myTuple; // this is fine because mixed can accept in any order
myTuple = mixed; // this is not fine because myTuple is a tuple and must be in order
//object
let myObj = {
    name: 'Jaseel',
    age: 24,
};
myObj = mixed;
let jaseel = {
    name: 'Jaseel',
    // age: 24,
    email: '',
    address: {
        city: 'San Francisco',
        state: 'CA',
    },
    albums: ['The Wall', 1],
};
const printUser = (user) => {
    var _a, _b;
    console.log((_a = user.name) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    console.log(user === null || user === void 0 ? void 0 : user.age);
    console.log(user.email);
    console.log(user.address.city);
    console.log(user.address.state);
    console.log(user.albums);
    return (_b = user.name) === null || _b === void 0 ? void 0 : _b.toUpperCase();
};
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.D);
console.log(Grade.C);
console.log(Grade.B);
console.log(Grade.A);
