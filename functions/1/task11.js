/*Write a function that concatenates a given string given number of times. 
For example, if “abc” and 4 are given values, the function prints out abcabcabcabc. 
*/

function concat(str, num) {
    var concStr = "";

    for (var i = 1; i <= num; i++) {
        concStr += str;
    }
    return concStr;
}