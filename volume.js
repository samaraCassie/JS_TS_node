        /*Faça um algoritmo/programa que leia o diâmetro de uma bola de futebol. Em seguida o
        programa deve, usando uma função criada por você, calcular o volume desta bola, cuja
        fórmula é 
            Vol= (4/3)⋅π⋅r^3
            sendo pi=3,141592 
            e r é o raio da esfera.

        Lembre-se que o raio é a metade do diâmetro.
        → Lembre-se de deixar as entradas e saídas no programa principal (main)
        */
let num;
let r;
let vol;
const pi = 3.141592;

function volume(valor) {
    r=valor/2;
    r=r*r*r;
    vol = (4/3)*pi*r;
    return vol;
}

num=volume(20);
console.log(num);


