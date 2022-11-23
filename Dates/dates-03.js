/**
 * 
time elapsed between two days *  
 * ---------------------------------------------------------------------------------
 * 
 */

'use strict';

const today = new Date();
const christmas = new Date(2022, 11, 25);

console.log(christmas.toString().subString(0, 15));

const milliseconds = chritmas - today;
console.log(milliseconds);

const day = 1000 * 60 * 60 * 24;
const days = (christmas - today) / day;
console.log(`Day untill christmas: ${Math.trunc}`)