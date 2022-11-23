


/**
 * 
 * 
 *    Objecets destructuring
 */

'use strict';

const person = {
    firstName: 'Elon',
    lastName: 'Musk',
    userName: 'iwillfireyou'
}

//let firstName = person.firstName;
//let lastName = person.lastName;
//let userName = person.userName;



// traditional approach using object destructuring
// In this case we need to use the same property names
let { firstName, lastName, userName} = person;

console.log(firstName);
console.log(lastName);
console.log(userName);