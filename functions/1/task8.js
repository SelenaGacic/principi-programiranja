//Write a function that calculates a number of appearances of a given number in a given array.

function appOfNum(arr, num) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            counter++;
        }
    }
    return counter;
}