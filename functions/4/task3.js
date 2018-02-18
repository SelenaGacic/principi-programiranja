/*Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function minEl(arr) {
    var minEl = 9999999999999999999999999999999;
    var indexOfRes = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minEl) {
            minEl = arr[i];
            indexOfRes = i;
        }
    }
    return [minEl, indexOfRes];
}
console.log(minEL([2,7,8,6,3]));
