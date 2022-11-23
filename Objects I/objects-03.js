

'use strict'

const student = {
    id: 'MITT3478',
    name: 'victor jenkins',
    dob: '04/10/2003',
    email: 'vicjenk@mitt.ca'
};

// object.keys(obj) and object.values(obj) return an array
const objKeys = object.keys(student);
console.log(`keys: ${objKeys.join(', ')}`, '\n');

const objValues = object.values(student);
console.log(`values: ${objValues.join(', ')}`);

//object.entries()
const objEntries = object.entries(student);

for (const [key, value] of objEntries) {
    console.log(`${key}: ${value}`);
}

//checking the type of the object

const date = new Date();
console.log(student instanceof Object);  //true
console.log(date instanceof Object);  //true