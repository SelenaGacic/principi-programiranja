/*Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/

function paca(num1, num2) {
    var div = 0;
    (num1 > num2) ? div = num2 : div = num1;
    for (var i = div; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            return i;
        }
    }
}