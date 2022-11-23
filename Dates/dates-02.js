/**
 * 
 * Adding Days to a Date
 *  
 * ---------------------------------------------------------------------------------
 * 
 */


'use strict';

function print(arg) {
    console.log(arg);
}



const now = new Date();
print(`Today: ${now.toString().substring(0, 15)}`);


const today = now.getDate();


// Dat are mutable

now.setDate(today + 100);
print(`100 days from now: ${now.toString().substring(0, 15)}`);

const dob = new Date(2000, 4, 3, 10, 20);
print(dob);

/// Zeroing time in a date
dob.setHours(0, 0, 0);
print(dob.toString());