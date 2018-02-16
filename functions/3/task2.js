/*Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]
*/
var arr1 = [NaN, 0, 15, false, -22, '', undefined, 47, null, "aasda"];

function skipp(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            str += " " + arr[i] + "";
        }
    }
    return str.toString();
}



console.log(skipp(arr1));