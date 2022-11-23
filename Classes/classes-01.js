/*------------------------------------
Object-oriented JavaScript
Muzammil Mahmood

Creating a class in JS

A class is blueprint for objects. Classes have members, that are fields, 
constructors and methods. In EcmaScript, classes are just objects

In essence of a ES class is the constructor function. In fact, behind the
scenes a ES class is a constructor function, and all methods are attached to
that function's prototype
-------------------------------------*/
'use strict';

function print(arg) {
    console.log(arg);
}
//  Naming convention: PascalCase etc SerialNumber
class Customer {
    constructor(id, name, email, orders) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.orders = orders;
    }

    getName() {
        return this.name;
    }

    printOrders() {
        const arr = [...this.orders];

        if(Array.isArray(this.orders) && this.orders.length > 0) {
            this.orders.forEach(order => print(order));
        } else {
            print('Invalid data type');
        }
    }
}

const orders = ['#4790', '#8903', '#3467', '#7834', '#9833'];
// Creating an object (in Java/C# we say an instance of a class)
const customer = new Customer(
    2489, 'John Smith', 'john875@email.com' , orders
);

print(customer);
customer.printOrders();
