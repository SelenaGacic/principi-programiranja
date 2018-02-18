/*Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

//  function intertwines(arr1, arr2) {
// var globalLength = arr1.length + arr2.length;
// var globalArr = [];
// for (var g = 0; g < globalLength; g++) {
//     for (var i = 0; i < arr1.length; i++) {
//         globalArr[0] = arr1[0];
//         globalArr[g + 2] = arr1[i];
//     }
// }
// for (var g = 1; g < globalLength; g++) {
//     for (var j = 0; j < arr2.length; j++) {
//         globalArr[1] = arr2[0];
//         globalArr[g + 2] = arr1[i];
//     }
// }
//return globalArr;
function intertwines(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    return result;
}
