/*Write a function that calculates the number of appearances of a letter a in a given string. 
Modify the function so it calculates the number of both letters a and A.*/


function appOfNum(str, lett) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (lett == str[i]) {
            counter++;
        }
    }
    return counter;
}
