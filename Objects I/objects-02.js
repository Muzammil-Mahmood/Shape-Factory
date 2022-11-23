



'use strict';

const customer = {
    id: 'C7839J',
    name: 'Maria Johnson',
    email: 'maria37@gmail.com',
    isSubscribed: true
};

console.log(customer, '\n');

// checking if a given property exists on the object instance
console.log(customer.hasOwnProperty('name'));  //true
console.log(customer.hasOwnProperty('phone'));  //false

// checking if a given property can be enumerated using the 'for-in' loop

console.log(customer.propertyIsEnumerable('name'));  //true
console.log(customer.propertyIsEnumerable('email'));  //true


for (const property in customer) {
    console.log(`${property}: ${customer[property]}`);
}
console.log();

//checking if an object has a property using 'in' operator
// the 'in' operator searches an object and its prototype chain (inheritance)

if ('email' in customer) {
    console.log('customer has an email property');
}

if ('phone' in customer) {
    console.log('customer has a phone property');
}

if ('toString' in customer) {
    console.log('customer can use the toString() method');
}
