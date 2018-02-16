/*Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12.*/

var month = 7;
var res = "";

switch (month) {

    case 1:
    case 2:
        res = "Winter";
        console.log(res);
        break;

    case 3:
    case 4:
    case 5:
        res = "Spring";
        console.log(res);
        break;

    case 6:
    case 7:
    case 8:
        res = "Summer";
        console.log(res);
        break;

    case 9:
    case 10:
    case 11:
        res = "Autumn";
        console.log(res);
        break;

    case 12:
        res = "Winter";
        console.log(res);
        break;

    default:
        res = "Input must be a number between 1 and 12";
        console.log(res);
        break;
}