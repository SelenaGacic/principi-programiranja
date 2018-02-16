/*Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number
*/

function revers(num) {
    if (typeof num === "number") {
        var newNumStr = num.toString();
        var output1 = "";
        for (var i = newNumStr.length - 1; i >= 0; i--) {
            output1 += newNumStr[i];
        }
        return parseInt(output1);
    }
    return "Insert a number";
}

console.log(revers(789));