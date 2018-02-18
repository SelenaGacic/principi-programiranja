/*Write a program that prints a multiplication table for numbers up to 12.*/


function table(num) {
    var arr = [];

    for (var i = 1; i <= num; i++) {
        arr[i] = [];
        for (var j = 1; j <= num; j++) {
            //arr[i][j] = `${i} X ${j} = ${i * j}`;
            arr[i][j] = i * j;
        }
        arr[i].shift();
    }
    arr.shift(); 
    return arr;
}

console.log(table(12));