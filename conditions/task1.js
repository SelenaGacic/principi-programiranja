/*Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”*/


var a = 8;

if (typeof a === "number") {

    if (a % 2 == 0) {
        var result = a + " je paran broj";
    } else {
        result = "X";
    }
}

console.log(result);
