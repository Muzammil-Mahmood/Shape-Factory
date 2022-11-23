

/**
 * 
 * 
 *    The factory pattern
 */

 'use strict';

 const newEmployee = function(firstName, lastName, startdate) {
    const emp = {
        firstName: firstName,
        lastName: lastName,
        startdate: startdate,
        getName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    return emp;
 };


 const mary = newEmp('Mary', 'guttemberg', '2020-07-13');
 console.log(mary);
 console.log(mary.getName());