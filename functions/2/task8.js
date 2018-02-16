/*Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 
that has no positive divisors other than 1 and itself. */

function primeNum(num) {
    if (num === 1) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

