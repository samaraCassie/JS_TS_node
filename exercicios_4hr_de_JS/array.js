/*
Crie um algoritmo/programa que leia 10 valores e armazene-os em um vetor. Em seguida o
programa deve ler um número que será procurado na lista.
- Caso o número seja encontrado o programa deve mostrar em que posição está
- Caso o número não seja encontrado, o programa deve mostrar uma mensagem
*/
let tam=0;
let num;
let busca=false;
const array=[];
while (tam<5) {
    num=prompt('Insira um valor: ');
    array[tam]=num;
    tam++
}

num=prompt('Qual valor está buscando?');

for (let i = 0; i < array.length; i++) {
    if(array[i]==num){
        alert(`O ${num} está na posição ${i}`)
        busca=true;
    }
}
if (busca==false) {
    alert(`O valor não foi encontrado na lista.`);
}