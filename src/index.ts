let id: number = 5;

let company: string = "House of Nguyens";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number = 34;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

//Tuple
let person: [number, string, boolean] = [1, "Rayn", true];

//tple array
let employee: [number, string][];
employee = [
  [1, "Brad"],
  [2, "john"],
  [3, "ryan"],
];
//union
let pid: string | number = 22;
//pid can be number or string
pid = "22";

//Enum-  forced values
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction1.Down);
//node dist/index to see this console.log

//objects
type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 2,
  name: "Ryan",
};

//type assertion
let cid: any = 1;
let customerID = cid as number; //change to customerID as number
//same as let customerID = <number>cid

//funtions
function addNum(x: number, y: number): number {
  return x + y;
}

//void = no return
function log(message: string | number): void {
  console.log(message);
}

//interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number; //wont give error if age was not included
}

const user: UserInterface = {
  id: 2,
  name: "Ryan",
};

type Point = number | string;
const p1: Point = 1;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
//this will reurn the result of x+y
const sub: MathFunc = (x: number, y: number): number => x - y;

//classes
class Person1 {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
const brad = new Person1(1, "brad");

//
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register(): string {
    return "any string ${this.name}";
  }
}

//extend class when we want to use Person method and add in more for Employee
//Employee is a subclass aka childclass (of Person parent)
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
        super(id,name)//super will match the previous method
        this.position = position//this will add position to Person
    }
}
const emp = new Employee(3, 'shawn', 'developer')

console.log(emp.name)

//Generics
function getNumberArray(items: number[]): number[]{
    return items;
}

function getStringArray(items: string[]): string[] {
  return items;
}
const numberArray = getNumberArray([1,2,3]);
const stringArray = getStringArray(['a', 'b'])
//duplicate work, pass in generics:

function getArray<T>(items: T[]): T[]{
    return items;
}

const getStringArray2 = getArray<string>(["d", "f"]);
const getNumberArray2 = getArray<number>([1, 2, 3]);