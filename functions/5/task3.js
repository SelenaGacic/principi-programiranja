/*Initialize two arrays. 
The first one should contain student names, 
the second one the number of points for each student. 
Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input : [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/

function grade(names, points) {
    var res = "";
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var point = points[i];
        var grade;
        if (point > 90) {
            grade = 10;
        } else if (point > 80) {
            grade = 9;
        } else if (point > 70) {
            grade = 8;
        } else if (point > 60) {
            grade = 7;
        } else if (point > 50) {
            grade = 6;
        } else {
            grade = 5;
        }
        res += `${name} acquired ${point} points and earned ${grade}. `;
    } return res;
}
