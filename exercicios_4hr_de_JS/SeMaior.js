let maior

maior = 2

function Maior(x, y){
    if (x > y) {
        return x;   
    } else {
        return y;
    }
}

maior = Maior(10, 5);

console.log(maior);

//
//
// Ou Fazer assim :
const Maior = (x, y) => x > y ? x : y;
console.log(Maior(5, 10));