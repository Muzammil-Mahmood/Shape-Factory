/*
Setters and getters

Encapsulation
*/
'use strict';

class Employee {
    constructor(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        // we are gonna set the date using a method
        this.setDateOfBirth(dateOfBirth);
    }

    getDateOfBirth() {
        return this._dateOfBirth;
    }

    setDateOfBirth(date) {
        if (date instanceof Date && date < Date.now()) {
            this._dateOfBirth = date;
        } else {
            throw new TypeError(`Date of birth is not valid`)
        }
    }

}


const employee = new Employee(3489, 'Tommy Jones', new Date(1999, 0, 23));
console.log(employee.getDateOfBirth());

