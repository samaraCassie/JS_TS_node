const num = Number(prompt('Digite um número: '));
const num_H1 = document.getElementById('num-h1');
const txt = document.getElementById('txt');

num_H1.innerHTML = num;
txt.innerHTML = `<p>Raiz quadrada: ${num ** 0.5}</p>`;
txt.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
txt.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`;
txt.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`;
txt.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`;
txt.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`;