function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
       return `FizzBuzz`; 
    } else if (num % 3 == 0) {
        return `Fizz`;
    } else if (num % 5 == 0) {
        return `Buzz`;
    } else if (isNaN(num)) {
        return `Não é um numero`;
    } else {
        return num;
    }
}

let result = fizzBuzz(`false`);
console.log(result);