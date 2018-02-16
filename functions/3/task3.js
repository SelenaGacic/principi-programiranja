/*Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
*/

var arr1 = [NaN, 0, 15, false, -22, '', undefined, 47, null, "aasda"];

function skipp(arr) {
    var newArr = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr += " " + arr[i] + "";
        }
    }
    return newArr;
}



console.log(skipp(arr1));