/*Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th

Hint: num % 100 >= 11 && num % 100 <= 13    */

function ordinalNum(num) {
    var m = num % 10;

    if (num === 1) {
        console.log(num + "st");
    }
    if (num === 2) {
        console.log(num + "nd");
    }
    if (num === 3) {
        onsole.log(num + "rd");
    }

    for (var i = 4; i < 11; i++) {
        if (i === num) {
        console.log(num + "th");
        }
    }
    switch (m) {
        case 1:
            console.log(num + "st");
            break;

        case 2:
            console.log(num + "nd");
            break;

        case 3:
            console.log(num + "rd");
            break;

        default:
            console.log(num + "th");
            break;
    }
}

console.log(ordinalNum(5));

