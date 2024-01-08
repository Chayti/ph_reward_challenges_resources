/***

Create a simple day-of-week converter. The user will input a number representing the day of the week (1 for Sunday, 2 for Monday, and so on), and using a switch statement, the program will determine and display the corresponding day's name.

 */

var dayNumber = 3;
var dayName;

switch (dayNumber) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day number';
}

console.log('Day of the week: ' + dayName);
