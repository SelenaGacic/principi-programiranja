/*Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/

function bubbleSortBasic(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 1; j < array.length; j++) {
            if (array[j - 1] < array[j]) {
                var temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
    return array;
}