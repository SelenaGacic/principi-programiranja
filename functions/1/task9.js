//Write a function that calculates the sum of odd elements of a given array. 

function oddEl(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            sum += arr[i];
        }
    } 
    return sum;
}