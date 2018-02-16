/*Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.*/


var day = 10;
var res = " ";
switch (day) {
    case 1:
        res = "Mon";
        console.log(res);
        
        break;

    case 2:
        res = "Tue";
        console.log(res);
        break;

    case 3:
        res = "Wed";
        console.log(res);
        break;

    case 4:
        res = "Thu";
        console.log(res);
        break;
        
    case 5:
        res = "Fri";
        console.log(res);
        break;

    case 6:
        res = "Sat";
        console.log(res);
        break;

    case 7:
        res = "Sun";
        console.log(res);
        break;

        default:
        res= "Unesite broj od 1 do 7";
        console.log(res);
        break;

}