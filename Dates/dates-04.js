/**
 * 
time elapsed between two days *  
 * ---------------------------------------------------------------------------------
 * 
 */

'use strict';

const today = new Date();
const tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate() + 1);
// console.log(today);
//console.log(tomorrow);

const one = new Date(2025, 0, 10);
const two = new Date(2025, 0, 10);

// False:  two different objects
console.log(one === two);

// true: same value
console.log(one.getDate() === two.getDate());