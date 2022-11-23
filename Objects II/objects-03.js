

/**
 * 
 * 
 *    Adding functions (methods) to objects
 */

 'use strict';


 const employee = {
    name: 'Martin Riggs',
    email: 'martinriggs@lethalweapon.com',
    bonus: [117, 109, 174, 100],
    calcBonus() {
        let sum = this.bonus.reduce((ac, el) => ac + el, 0);
        return sum;
    }
 };

 // const reducer = (accumulator, element) => accumulator + element
 //'0' is an initial value to prevent an erors (if the array is empty)
 console.log(`${employee.name}'total bonus: ${employee.calcBonus()}`);