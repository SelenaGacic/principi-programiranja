/*Use the following array to make a new one by dividing its values by two and adding 5. 
If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ] */

function paca(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            newArr[i] = 20;
        } else {
        newArr[i] = arr[i]*2 + 5;
        }
    }
    return newArr;
}
