/*Check if a given string is a palindrome.
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/

function palindrome(str) {
    str = str.replace(" ", "");
    for (var i = 0, j = str.length - 1; i < str.length; i++) {
        if (str[i] !== str[j]) {
            return false;
            break;
        } else {
            j--;
        }
    }
    return true;
}