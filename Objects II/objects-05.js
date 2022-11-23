
/**
 * 
 * Function constructor pattern (old approach)
 *    
 */

 'use strict';

 const newEmployee = function(firstName, lastName, startdate) {

        this.firstName = firstName,
        this.lastName = lastName,
        this.startdate = startdate,
        this.getName = function() {
            return `${this.firstName} ${this.lastName}`;
        }
 };
