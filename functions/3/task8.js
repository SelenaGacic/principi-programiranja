/* Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times" */

function findWord(str, word) {
    var counter = 0;
    var arr = str.split(" ");
    for (var i =0; i < str.length; i++) {
        if (arr[i] === word) {
            counter++;
        }
    }
    return word + " was found " + counter + " times";
}
console.log(findWord("haha paca haha paca bebetina", "paca"));