/*Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa" */

function concat(str, num) {
    var concater = "";
    for (var i = 1; i <= num; i++) {
        concater += str;

    } return concater;
}