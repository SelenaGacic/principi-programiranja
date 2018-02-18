/*Find the min and max element in the following array and switch their places. 
Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function switchPlace(arr) {
    var minEl = arr[0];
    var maxEl = arr[0];
    var indexMax;
    var indexMin;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minEl) {
            minEl = arr[i];
            indexMin = i;
        }
        if (arr[i] > maxEl) {
            maxEl = arr[i];
            indexMax = i;
        }
    }
    arr[indexMin] = maxEl;
    arr[indexMax] = minEl;
    return arr;
}
