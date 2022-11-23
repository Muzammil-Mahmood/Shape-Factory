

// Merging objects

'use strict';

const employee = {
    id: 'EMP3489',
    name: 'Josephine Stevens',
    startDate: new date(2021, 4, 3)
};

const contact  = {
    email: 'josephine@email.com',
    phone: '(209) 238-8900'
};

console.log(employee);
console.log(contact);

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const numbers = [...nums1, ...nums2];
console.log(number.join(', '), '\n');

// copying (shallow) two objects

const empInfo = {...employee, ...constact};
console.log(empInfo);