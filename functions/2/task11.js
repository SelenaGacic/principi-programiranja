/*Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000] */

function convertAndFilter(arr) {
    newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            newArr.push(parseFloat(arr[i]));
        }
    }
    return newArr;
}

console.log(convertAndFilter(["str", "7", undefined, 25.3, "null"]));