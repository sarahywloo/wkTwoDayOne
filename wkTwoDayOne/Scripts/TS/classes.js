'use strict';
var Customer = (function () {
    function Customer() {
    }
    return Customer;
})();
var myCust = new Customer();
myCust.name = "john";
myCust.phone = "555-555-5555";
console.log("Customer name: " + myCust.name + ", Phone: " + myCust.phone);
var Product = (function () {
    //make descirption private so that it cannot be modified after it is created
    //add ? to make this an optional argument
    function Product(name, price, unitsInStock, description) {
        this.name = name;
        this.price = price;
        this.unitsInStock = unitsInStock;
        this.description = description;
    }
    Product.prototype.report = function () {
        console.log("Product Name: " + this.name);
        console.log("Product Price: " + this.price);
        console.log("Product Units In Stock: " + this.unitsInStock);
        console.log("Product Description: " + this.description);
    };
    return Product;
})();
var myProduct = new Product('MacBook Pro', 1199, 50, 'with retina display');
console.log(myProduct.report());
myProduct.name = 'MacBook Air';
console.log(myProduct.report());
var newProduct = new Product('A', 5, 1);
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
