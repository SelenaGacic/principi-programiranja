/*Write a function to get the first n characters and add “...” at the end of newly created string.
"This is long string", 7 -> "This is..."*/

function fun(str, n) {
    var newStr = "";
    var konStr = "";
    for (var i = 0; i < n; i++) {
        newStr += str[i];
    }
    konStr = newStr + "...";
    return konStr;
}