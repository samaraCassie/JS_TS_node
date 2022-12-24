function fizzBuzz(push) {
    if (push % 3 == 0 && push % 5 == 0) {
       return `FizzBuzz`; 
    } else if (push % 3 == 0) {
        return `Fizz`;
    } else if (push % 5 == 0) {
        return `Buzz`;
    } else if (isNaN(push)) {
        return `Não é um numero`;
    } else {
        return push;
    }
}

let result = fizzBuzz(`false`);
console.log(result);