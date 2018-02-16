/*Write a function to find the position of the last occurrence of a character in a string. 
The result should be in human numeration form.
If there are no occurrences of the character, function should return -1. */


function lastOcc(str, lett) {
    for (var i = str.length; i >= 0; i--) {
        if (str[i] === lett) {
            return i+1;
        } 
          
   
    }     return -1;
}
