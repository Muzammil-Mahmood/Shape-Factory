

// Counting occurences with an object


'use strict';

let str = 'hello my name is jerry';
let obj = {};
let char = '';
let count = 0;

str = str.replace(/\s/g, '');
console.log(str);

for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    count = obj[char];
    obj[char] = count ? count + 1 : 1;
}

for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
}