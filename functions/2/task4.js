/*Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2 */

function appOfNum(str, lett) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (lett === str[i]) {
            counter++;
        }
    }
    return counter;
}
