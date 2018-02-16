/*Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"                          */



function insertStr(str1, str2, pos = 0) {
    var str3 = str1.slice(0, pos);
    var str4 = str1.slice(pos);
    var solStr = str3 + str2 + str4;
    return solStr;
}

console.log(insertStr("paca je najbolja ", " cerka ", 1));


