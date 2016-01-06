'use strict';
function printName(personObj) {
    console.log(personObj.name);
}
var person = {
    name: 'bob',
};
printName(person); //TypeScript will not show an error message.
function addNumbers(x, y) {
    return x + y;
}
var customerArray;
customerArray = ["John", "Jim", "Jan", "Judy", "Jake"];
var myNumbers;
myNumbers = [1, 2, 3, 5, 8, 13, 21, 34];
var Car = (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.honk = function () {
        console.log('small wussy honk');
    };
    return Car;
})();
var Truck = (function () {
    function Truck(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Truck.prototype.honk = function () {
        console.log('BIG LOUD HONKKK');
    };
    return Truck;
})();
