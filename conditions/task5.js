/*Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.*/

var num1 = -4;
var num2 = 4;
var num3 = 1;

var result = num1 * num2 * num3;

if (result > 0) {

    console.log("+" + result);

} else if (result < 0) {

    console.log(result);
} else {

    console.log("Proizvod je 0.");
}
