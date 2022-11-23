/**
 *
 * 
 * comparing dates 
* ---------------------------------------------------------------------------------
 * 
 */

'use strict';


function print(arg) {
    console.log(arg);
}

const today = new Date();

print(`toString: ${today.toString()}`);


print(`toDateString: ${today.toDateString()}`);

print(`toTimeString: ${today.toTimeString()}`);


print(`toUTCString: ${today.toUTCString()}`);

print(`toLocaleString: ${today.toLocaleString()}`);


const someDate = new Date (2005, 2, 25);
const month = (someDate.getMonth() + 1).toString().padStart(2, '0');
print(month);