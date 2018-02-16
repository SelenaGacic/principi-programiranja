/*Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string" */

function repl(str) {
    var res = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            res += "+";
        } else {
            res += str[i];
        }
    } return res;
}

