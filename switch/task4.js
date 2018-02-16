/*Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
		For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.*/

var month = 7;
var res = "";

switch (month) {

    case 1:
        res = "Jan";
        console.log(res);
        break;

    case 2:
        res = "Feb";
        console.log(res);
        break;

    case 3:
        res = "Mar";
        console.log(res);
        break;

    case 4:
        res = "Apr";
        console.log(res);
        break;

    case 5:
        res = "May";
        console.log(res);
        break;

    case 6:
        res = "Jun";
        console.log(res);
        break;

    case 7:
        res = "Jul";
        console.log(res);
        break;

    case 8:
        res = "Aug";
        console.log(res);
        break;

    case 9:
        res = "Sep";
        console.log(res);
        break;

    case 10:
        res = "Oct";
        console.log(res);
        break;

    case 11:
        res = "Nov";
        console.log(res);
        break;

    case 12:
        res = "Dec";
        console.log(res);
        break;

    default:
        res = "Input must be a number between 1 and 12";
        console.log(res);
        break;
}