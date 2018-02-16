/*Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 
	
David
80
Marko
77
Dany
88
John
95
Thomas
68

The grades are computed as follows :

< 60%
F
< 70%
D
< 80%
C
< 90%
B
< 100%
A
*/

var marks = [80, 77, 88, 95, 68];
var averageMark = 0;
var grade = "";
var sum = 0;
var numStud = marks.length;

for (var i = 0; i < marks.length; i++) {

    sum += marks[i];
}

averageMark = sum / numStud;
console.log("The average mark is " + averageMark);

if (averageMark < 60) {
    grade = "The average grade is F"
    console.log(grade);
} else if (averageMark < 70) {
    grade = "The average grade is D"
    console.log(grade);
} else if (averageMark < 80) {
    grade = "The average grade is C"
    console.log(grade);
} else if (averageMark < 90) {
    grade = "The average grade is B"
    console.log(grade);
} else if (averageMark < 100) {
    grade = "The average grade is A"
    console.log(grade);
}