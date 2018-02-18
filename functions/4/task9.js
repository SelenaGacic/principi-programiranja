/*Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

function deleteEl(el, arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            delete arr[i];
        }
    }
	 for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
 deleteEl();
