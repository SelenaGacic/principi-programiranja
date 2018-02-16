/*Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] 
*/

function myFunc(num, el) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        if (el) {
            arr[i] = el;
        } else {
            arr[i] = null;
        }
    }
    return arr;
}




console.log(myFunc(3, "mmm"));
