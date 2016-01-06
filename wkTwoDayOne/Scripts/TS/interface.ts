'use strict';

/*
function printName(personObj: { name: string }) {
    console.log(personObj.name);
}

let person1 = { name: "Bob" };
printName(person1);


interface IPersonObj {
    name: string;
}

function printName(personObj: IPersonObj) {
    console.log(personObj.name);
}
*/

interface IPersonObj {
    name: string;
    age?: number;
}

function printName(personObj: IPersonObj) {
    console.log(personObj.name);
}

let person = {
    name: 'bob',
}

printName(person);  //TypeScript will not show an error message.

//Interface allows you to spcifying the return type as well

interface AddNumbers {
    (num1: number, num2: number): number;
}

function addNumbers(x, y): AddNumbers {
    return x + y;
}

//Interface also allows you to describes the types allowed to index an object and the return type 

interface StringArray {
    [index: number]: string;
}
let customerArray: StringArray;
customerArray = ["John", "Jim", "Jan", "Judy", "Jake"];

interface NumberArray {
    [index: number]: number;
}
let myNumbers: NumberArray;
myNumbers = [1, 2, 3, 5, 8, 13, 21, 34];

/*
interface IVehicle {
    make: string;
    model: string;
    year: number;
}

class Car implements IVehicle {
    make: string;
    model: string;
    year: number;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

class Truck implements IVehicle{
    make: string;
    model: string;
    year: number;
    offRoad: boolean;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let myCar = new Car('whatever', 'cool', 2015);
let myTruck = new Truck('neat', 'wow', 1990);

//This works in javascript but it shouldn't be written this way on typescript!
//let vehicle: Car[] = [myCar, myTruck];

let vehicle: IVehicle[] = [myCar, myTruck];

console.log(vehicle);

let first = vehicle[0];

console.log(first.make);
console.log(first.model);

//Is this not the best way to solve it?? 
//When more than one object needs to do the same things but in different ways?
*/

interface IVehicle {
    honk();
}

class Car implements IVehicle {
    honk() {
        console.log('small wussy honk');
    }
    make: string;
    model: string;
    year: number;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

class Truck implements IVehicle {
    honk() {
        console.log('BIG LOUD HONKKK');
    }
    make: string;
    model: string;
    year: number;
    offRoad: boolean;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

