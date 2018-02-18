/*Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/

function rotate(arr, k) {
    for (var i = 0; i < k; i++) {
        arr.push(arr[0]);
        arr.shift();
    }
    return arr;
}