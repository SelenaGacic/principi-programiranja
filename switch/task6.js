/*Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner:
 A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade".*/

var grade = "A";
var res = "";

switch (grade) {

    case "A":

        res = "Good job";
        console.log(res);
        break;

    case "B":

        res = "Pretty good";
        console.log(res);
        break;

    case "C":

        res = "Passed";
        console.log(res);
        break;

    case "D":

        res = "Not so good";
        console.log(res);
        break;

    case "F":

        res = "Failed";
        console.log(res);
        break;

    default:

        res = "Unknown grade";
        console.log(res);
        break;
}