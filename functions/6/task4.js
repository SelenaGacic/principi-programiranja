/*Write a function that takes a number and returns array of its digits*/


function paca(num) {
    var arr = [];
    while (num > 0) {
        arr.unshift(num % 10);
        num = num / 10 | 0;
    }
    return arr;
}