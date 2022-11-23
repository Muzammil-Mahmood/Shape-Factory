
// Exercise no 1
'use strict'

/**
 * reate an object with 6 or 7 properties (name, email, status, date, etc.). Add properties and values
that make sense (for an employee, for example), and use at least three different data types.
Implement a function that takes the object as an argument and generates a report about it. This
function should print the following:
• Number of properties
• Type of all property values (in one line, see example below)
• Whether the object contains dateOfBirth (true/false)
• Whether all properties are enumerable (true/false)
• Whether the object is immutable (true/false
 */

const employee = {
    name: 'John',
    email: 'John420@gmail.com',
    status: 'single',
    date: '29/04/1921',
    age: '29',
    height: '5.3 inches',
};

/*let count = 0;

for (let properties in employee) {
    count = count + 1
};
console.log(count);

const keys = Object.keys(employee)
console.log(keys);
*/

console.log(employee.hasOwnProperty('dob'));
console.log(employee.propertyIsEnumerable('name', 'email', 'status', 'date', 'age', 'height'));


Object.freeze (employee);
console.log(Object.isFrozen('employee'));


// Exercise no.:-
const keys = ['Name', 'City', 'Favfood',];
const values = ['Andre', 'Rome', 'Lasagna', 'Microsoft'];

let originalLen = keys.length;

const obj = {};
for (let i = 0; i < originalLen; i++) {
    let k = Math.floor(Math.random() * keys.length);
    let v = Math.floor(Math.random() * values.length);

    obj[keys[k]] = values[v];

    keys.splice(k, i);
    values.splice(v, i);
}

console.clear();
console.log(obj);