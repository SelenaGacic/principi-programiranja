//Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9]. 

var arr = [5, 15, -5, 20, 12, 18, 72, 14, 9];

for (var i = 0; i < arr.length; i++)
    if (arr[i] % 3 == 0) {
        console.log(arr[i]);
    }