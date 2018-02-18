/*Write a function to find the maximum element in array of numbers. Filter out all non-number elements.*/

function max(arr) {
    var numArr = arr.filter(function (element) {
        return typeof element === "number";
    });
    console.log(numArr);
    var max = numArr[0];
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > max) {
            max = numArr[i];
        }
    }
    return max;
}