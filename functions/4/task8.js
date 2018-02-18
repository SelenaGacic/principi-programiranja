/*Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concat(arr1, arr2) {
    // var newArr = [];
    // var newLength = arr1.length + arr2.length;
    // for (var g = 0; g < arr1.length; g++) {
    //     newArr[g] += arr1[g];
    for (var i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }    
    return arr1;
}
    