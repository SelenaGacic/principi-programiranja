/* Write a function to hide email address.

"myemailaddress@bgit.rs" -> "myemail...@bgit.rs"

*/

function toHide(str, hiddenEl) {
    // var indOfHiddEl = str.indexOf(hiddenEl);
    // //console.log(indOfHiddEl);
    // var newStr = str;
    // for (var i = 0; i < str.length; i++) {
    //     if (i === indOfHiddEl) {
    //         console.log(indOfHiddEl);
    //         newStr[i] = "..."
    //         // for (var j = indOfHiddEl; j < hiddenEl.length; j++) {
    //         //     newStr[i] = "...";
    //         //     console.log(123);
    //         // }
    //     } else {
    //         newStr[i] = str[i];
    //         //console.log(111);
    //     }
    // }

    return str = str.replace(hiddenEl, "...");
}

console.log(toHide("paca bebe supica", "supica"))