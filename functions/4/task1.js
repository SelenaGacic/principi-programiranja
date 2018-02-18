/*Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

function checkIt(el, arr) {
    var res = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            res = "Yes.";
            break;
        } else {
            res = "No.";
        }
    }
    return res;
}
checkIt();
console.log(checkIt(2, [2,5,9,7,6,6]))