/*Write a conditional statement to sort three numbers.

Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */


var num1 = 7;
var num2 = 6;
var num3 = 4;

if (num1 > num2 && num2 > num3) {
    console.log(num1, num2, num3);

} else if (num2 > num1 && num1 > num3) {
    console.log(num2, num1, num3);

} else if (num3 > num1 && num1 > num2) {
    console.log(num3, num1, num2);

} else if (num1 > num3 && num3 > num2) {
    console.log(num1, num3, num2);

} else if (num2 > num3 && num3 > num1) {
    console.log(num2, num3, num1);

} else if (num2 > num1 && num1 > num3) {
    console.log(num2, num1, num3);

} else if (num3 > num2 && num2 > num1) {
    console.log(num3, num2, num1);
}
