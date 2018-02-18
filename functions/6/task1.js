/*Write a function to count vowels in a provided string.
If you are  not aware of indexOf function, try to use switch statement.*/

function vow(str) {
    var counter = 0;
    str = str.toUpperCase();
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
                counter++;
                break;

            default:
                break;
        }
    }
    return counter;
}