/*
Setters and getters

Encapsulation
*/
'use strict';

class Employee {
    constructor(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        // we are gonna set the dats using the property setter
        this._dateOfBirth = dateOfBirth;
    }

    /*
       this.dateofbirth is a property
       this._dateofbirth is a data field

       when you use properties, you must be careful to avoid name
       collisions. The field that stored the value can not have the same name
       as the property or constructor parameter

    */

    set dateOfBirth(date) {
        if (date instanceof Date && date < Date.now()) {
            this._dateOfBirth = date;
        } else {
            throw new TypeError(`Date of birth is not valid`)
        }
    }



    get dateOfBirth() {
        return this._dateOfBirth.toDateString();
    }
}

const employee = new Employee(3489, 'Tommy Jones', new Date(1999, 0, 23));
console.log(employee.dateOfBirth);



