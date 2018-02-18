/*Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/

// function reversed(str) {
//     var newStr = " ";
//     for (var i = str.length - 1, j = 0; i >= 0; i--) {
//         newStr[j] = str[i];
//         j++;
//     }
//     return newStr;
// }


function rev(str) {
    var arr = str.split("");
    arr = arr.reverse().join("");
    return arr;
}
