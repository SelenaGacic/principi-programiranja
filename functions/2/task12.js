/*Write a function to calculate how many years there are left until retirement based on the year of birth. 
Retirement for men is at age of 65 and for women at age of 60. 
If someone is already retired, a proper message should be displayed.*/


function retirement(sex, year, birth) {
    var yearsUntilRet = 0;
    var age = 0;
    age = year - birth;
    if (sex === "man") {
        if (age <= 65) {
            yearsUntilRet = 65 - age;
            return yearsUntilRet;
        } else {
            return "You are in retirement already";
        }

    }
    if (sex === "woman") {
        if (age <= 60) {
            yearsUntilRet = 65 - age;
            return yearsUntilRet;
        } else {
            return "You are in retirement already";
        }
    }
}

console.log(retirement("man", 2018, 1993));