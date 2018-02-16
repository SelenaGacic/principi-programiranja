//Write a program which prints the elements of the following array as a single string.


var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var str = "";

for (var i = 0; i < x.length; i++) {
    str += x[i] + " ";
}

console.log(str);



