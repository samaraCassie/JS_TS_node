let nome = 'samara';  //Variavel
let idade = 19;       //Variavel
let cor = 'vermelho'; //Variavel         

let pessoa = {      //Objeto
    nome: 'Cassie',
    curso: 'programação'
}

let primos = [1,2,3,5,7,11,15]; //Vetor


console.log('Primos: ', primos);
console.log('Tamanho do Vetor: ', primos.length);

function mudarCor(c) {        //Função|Metodo --SEM RETURN--
    cor=c;
}

mudarCor('Azul'); //Chamando função

console.log(cor);

function metade(valor){        //Função|Metodo --COM RETURN--
    return valor/2;
}

let num = 10;

console.log('A metade de ', num, ' é: ', metade(num));

//-----Operedores ternarios!!------

let result=0 ? par : impar; //Se result for 0, será par, caso contrário, será impar
