/**
 * 
 * 
 *    Adding functions (methods) to objects
 */

 'use strict';


 // In java or ECMA script function is a data type
const person = new Object();
person.firstName = 'John';
person.lastName = 'Smith';
person.email = 'john75@email.com';
person.getName = function() {
    return `${this.firstName} ${this.lastName}`;
};

console.log(person, '\n');
console.log(`Welcome, ${person.getName()}`, '\n');



// object literal syntax
// Adding the method without the function keyword

const employee = {
    firstName: 'martin',
    lastName: 'jones',
    email: 'martinj@gmail.com',
    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(`Welcome, ${employee.getName()}`);
