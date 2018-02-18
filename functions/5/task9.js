/*Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).*/

function comb(first, second) {
    var res = [];
    for (var i = first; i <= second; i++) {
        for (var j = first; j <= second; j++) {
            if ( i != j) {
                res.push(`(${i},${j})`);
            }
        }
    }
    return res;
}