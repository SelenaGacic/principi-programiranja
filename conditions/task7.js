/*Write a conditional statement to find the largest of five numbers. Display the result in console.

Sample numbers: -5, -2, -6, 0, -1 
Output: 0 */


var num1 = 9;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {

    console.log(num1);

} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {

    console.log(num2);

} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {

    console.log(num3);

} else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {

    console.log(num4);

} else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {

    console.log(num5);
}


