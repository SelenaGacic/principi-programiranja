//Write a program to compute the sum and product of an array of integers

var arr = [1, 2, 3, 5];
var sum = 0;
var prod = 1;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    prod *= arr[i];
}

console.log(sum);
console.log(prod);