let fat;

function Fatorial(valor) {
    for (let i = 0; i <= valor; i++) {
        valor = valor * i;
    }
}

fat = Fatorial(5);
console.log(fat);