/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

function multipl(arr) {
   var newArr = [];
   for (var i = 0; i < arr.length; i++) {
       if (arr[i] > 0) {
           newArr[i] = arr[i]*2;
       } else {
           newArr[i] = arr[i];
       }
   }
   return newArr;
}

console.log(multipl([2,8,9,6,3,4]))