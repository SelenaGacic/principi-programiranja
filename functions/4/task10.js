/*Write a program that inserts a given element e on the given position p in the array a. 
 If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

function insert(el, position, arr) {
    if (position > arr.length) {
        return "error! The value of the position is greater than the array length";
    } else {
        var newArr = [];
        for (var i = 0, j = 0; i < arr.length; i++) {
            if (i === position) {
                newArr[j] = el;
                newArr[j + 1] = arr[i];
                j += 2;
            } else {
                newArr[j] = arr[i];
                j++;
            }
        }
        return newArr;
    }
}
insert();