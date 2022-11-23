


'use strict'

const student = {
    name: 'John Smith',
    dob: '05/10/2005',
    classes: ['Advanced javaScript', 'Web dev', 'Intro to c#'],
    grades: [85, 95, 92]
};

// shallow copy: if your object includes arrays or other objects as properties,
// these won't be copied

const shallowCopy = {...student};

student.dob = '05/10/2006';
student.grades[1] = 98;

console.log(`${student.dob} | ${student.grades.join(', ')}`);
console.log(`${shallowCopy.dob} \ ${shallowCopy.grades.join(', ')}`, '\n');

//Deep copy: there is no single solution for deep copying an object. The safest
// approach is to write your won cloning logic that's specific to the type of the
// object you want to clone

function clone(obj) {
    //1. Shallow copy
    const copy = {...student};

    // 2. copy the property that is an object
    copy.classes = [...obj.classes];
    copy.grades = [...obj.grades];

    return copy;
}

const deepCopy = clone(student);
student.grades[0] = 90;

console.log(student.grades.join(', '));
console.log(deepCopy.grades.join(', '));