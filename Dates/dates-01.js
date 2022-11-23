

/**
 * 
 * The Date Object 
 * 
 * JJS includes a date object that provides good support for manipulating date
 * information. When you create a new date object, it is automatically populated
 * with the current date and time, down to the nearest millisecond
 * ---------------------------------------------------------------------------------
 * 
 */

'use strict'

function print(arg) {
    console.log(arg);
}

const now = new Date();

print(now);  // Node environment
print(now.toString());  // Browser


// get full year. this will return a four digit number

print(`year: ${now.getFullYear()}`);

// get month -> month number (0-11)

print(`Month: ${now.getMonth() + 1}`);

// get date -> day of the month (0-31)
print(`Day of month: ${now.getDate()}`);

// get day  -> day of the week (0 to 6))
print(`Day of the week: ${now.getDay()}`);

// get hours() -> hours of the day (0 to 59)
print(`Hour: ${now.getHours()}`);


// get minutes() -> minutes of the day (0 to 59)
print(`Minutes: ${now.getMinutes()}`);


// get Seconds() -> Seconds of the day (0 to 59)
print(`Seconds: ${now.getSeconds()}`);


// get milli Second() -> MilliSecond of the day (0 to 999)
print(`MilliSeconds: ${now.getMilliseconds()}`);



