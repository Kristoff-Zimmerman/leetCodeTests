// 263. Ugly Number

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

 
let n = 12345678910

var isUgly = function(n) {    
    if (n <= 0) {
        return false;
    }
    
      const reduce = (dividend, divisor) => {
        while (dividend % divisor == 0) {
            dividend /= divisor;;
        }
        return dividend;
    }

    for (const num of [2, 3, 5]) {
        n = reduce(n, num);
    }

    return n == 1;
};

console.log(isUgly(n));
