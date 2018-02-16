/*Write a function that draws a horizontal chart representing three given values.
 For example, if values are 5, 3, and 7, the function should draw:
* * * * *
* * *
* * * * * * *                               */

var sum = "";
var summ = "";
var summm = "";

function stars(num1, num2, num3) {

    for (i = 1; i <= num1; i++) {
        sum += "*";
    } console.log(sum);

    for (i = 1; i <= num2; i++) {
        summ += "*";
    } console.log(summ);
    
    for (i = 1; i <= num3; i++) {
        summm += "*";
    } console.log(summm);
}