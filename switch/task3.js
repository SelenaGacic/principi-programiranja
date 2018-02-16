/*Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
		For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.*/

var day = 1;
var res = " ";
switch (day) {
    case 1:
    case 2:
    case 3:  
    case 4:
    case 5:
        res = "It's weekday!";
        console.log(res);
        break;

    case 6:
    case 7:
        res = "It's weekend!";
        console.log(res);
        break;

        default:
        res= "Unesite broj od 1 do 7";
        console.log(res);
        break;

}