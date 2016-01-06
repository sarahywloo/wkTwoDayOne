'use strict';

class Customer {
    name: string;
    phone: string;
}

let myCust = new Customer();
myCust.name = "john";
myCust.phone = "555-555-5555";

console.log(`Customer name: ${myCust.name}, Phone: ${myCust.phone}`);

class Product {
//make descirption private so that it cannot be modified after it is created
//add ? to make this an optional argument
    constructor(public name: string, public price: number, public unitsInStock: number, private description?: string) {}

    report() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: ${this.price}`);
        console.log(`Product Units In Stock: ${this.unitsInStock}`);
        console.log(`Product Description: ${this.description}`);
    }
}

let myProduct = new Product('MacBook Pro', 1199, 50, 'with retina display');
console.log(myProduct.report());

myProduct.name = 'MacBook Air';
console.log(myProduct.report());

let newProduct = new Product('A', 5, 1);
console.log(newProduct.report());

//Typescript doesnt allow us to get the value of myProduct.description
//console.log(myProduct.description);
//create a get description function (see below)

/*
class Product {
    name: string;
    price: number;
    unitsInStock: number;
    desc: string;
    // get description() {
        return this.desc;
    }
    constructor (name: string, price: number, unitsInStock: number, desc: string) {
        this.name = name;
        this.price = price;
        this.unitsInstock = unitsInStock;
        this.desc = desc;
    }
}
*/
