/*
Write a function to find the position of the first occurrence of a character in a string. 
The result should be in human numeration form. 
If there are no occurrences of the character, the function should return -1. */

function firstOcc(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i+1;
        }
        

    }
    return -1;
}
