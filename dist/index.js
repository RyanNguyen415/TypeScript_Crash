"use strict";
let id = 5;
let company = "House of Nguyens";
let isPublished = true;
let x = "Hello";
let age = 34;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
//Tuple
let person = [1, "Rayn", true];
//tple array
let employee;
employee = [
    [1, "Brad"],
    [2, "john"],
    [3, "ryan"],
];
//union
let pid = 22;
//pid can be number or string
pid = "22";
//Enum-  forced values
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
const user2 = {
    id: 2,
    name: "Ryan",
};
//type assertion
let cid = 1;
let customerID = cid; //change to customerID as number
//same as let customerID = <number>cid
//funtions
function addNum(x, y) {
    return x + y;
}
//void = no return
function log(message) {
    console.log(message);
}
const user = {
    id: 2,
    name: "Ryan",
};
const p1 = 1;
const add = (x, y) => x + y;
//this will reurn the result of x+y
const sub = (x, y) => x - y;
//classes
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const brad = new Person1(1, "brad");
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return "any string ${this.name}";
    }
}
//extend class when we want to use Person method and add in more for Employee
//Employee is a subclass aka childclass (of Person parent)
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); //super will match the previous method
        this.position = position; //this will add position to Person
    }
}
const emp = new Employee(3, 'shawn', 'developer');
console.log(emp.name);
//Generics
function getNumberArray(items) {
    return items;
}
function getStringArray(items) {
    return items;
}
const numberArray = getNumberArray([1, 2, 3]);
const stringArray = getStringArray(['a', 'b']);
//duplicate work, pass in generics:
function getArray(items) {
    return items;
}
const getStringArray2 = getArray(["d", "f"]);
const getNumberArray2 = getArray([1, 2, 3]);
