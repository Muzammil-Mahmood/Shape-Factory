

//Freezing an Object

'use strict';

// objects are mutable

const employee = {
    id: 'EMP3948',
    name: 'Carol Stevens',
    startdate: new date(2019, 4, 3)
};

employee.name = 'Carol Jones';
console.log(employee);

// object.freez() makes an object immutable. A frozen onject can no longer be
// changed: new properties can not be added, and existing properties 
// can not be remmoved


Object.freeze(employee);  
// All properties become 'read-only'
// employee.id = 'EMP3489'; Cannot assign to read only property 'id'

console.log(Object.isFrozen(employee));   // true