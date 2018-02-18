/*Write a program that checks if a given array is symmetric. 
An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric*/

function symmetric(arr) {
    var res = "";
    var indexOfLastEl = arr.length - 1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] = (arr[indexOfLastEl - i])) {
            res = "The array is symmetric."
        } else {
            res = "The array isn't symmetric."
        }
    }
    return res;
}