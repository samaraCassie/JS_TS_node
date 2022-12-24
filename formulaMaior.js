        /** Escreva um algoritmo/programa que leia 2 valores X e Y, e que usando uma função,
        determine qual o maior através da fórmula: 
        MaiorXY = (x + y + |x−y|) / 2

        Para obter o "módulo" de um número em C, use a função "abs", presente na <stdlib.h>.
        Se a função abs da biblioteca <math.h> for usada, o programa só funciona com int.
        Para aceitar valores float, a função pré-definida fabs deve ser usada.
        */
let maior=0;

function Maior(x, y) {
    maior = x + y + Math.abs(x-y);
    maior /= 2;
    return maior
}

maior=Maior(8, 7);
console.log(maior);