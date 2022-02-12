"use strict";
//Basic types in TypeScript
let id = 5;
let company = 'Ankit Singh';
let ispublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
//Tuple: we can put number string boolean any value in the bracket
let person = [1, 'Hello', true];
//Tuple Array
let employee; //example of tupple array
employee = [
    [1, 'xyz'],
    [2, 'abc'],
    [3, 'tyt'],
];
//Union allows us to use more than one data type for a variable or a function parameter
let pid;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Left)
// console.log(Direction1.Right);
// console.log(Direction1.up);
// console.log(Direction1.Down);
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion: type assertion is a mechanism which tells the compiler about the type of a variable
let cid = 1;
// let customerid = <number>cid
let customerid = cid;
//Function
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1,2));
//Void return type function 
function print(message) {
    console.log(message);
}
const user1 = {
    id: 2,
    name: 'abcd'
};
const add = (s, y) => x + y;
const sub = (s, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const brad = new Person(1, 'Ankit Singh');
const mike = new Person(2, 'React Native');
// console.log(brad, mike)
//Data Modifier: This is public by default we can vhnaged it into private or protected as well
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const abc = new Person(1, 'Ankit Singh');
const xyz = new Person(2, 'React Native');
// console.log(abc, xyz)
//Extendidng Classes(sub class)
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const employe = new Employee(3, 'Honda', 'Me');
// console.log(employe)
//Generics Part
function gen(item) {
    return new Array().concat(item);
}
let numarr = gen([1, 2, 3, 5]);
let starr = gen(['hello', 'hii', 'bbye']);
console.log(numarr);
console.log(starr);
function sum(arg0, arg1) {
    throw new Error("Function not implemented.");
}
