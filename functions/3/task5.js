/* Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  
*/

function lastEl(arr, n) {
    var res = [];
    for (var i = arr.length - 1; i > (arr.length - 1 - n); i--) {
        res.unshift(arr[i]);
    }
    return res;
}

console.log(lastEl([7, 5, 1, 6, 2], 1));