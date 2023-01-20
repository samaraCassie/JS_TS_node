function meuEscopo() {
    const div = document.querySelector('.frases');
    div.innerHTML = ``;

    for (let i = 1; i <= 4; i++) {
        const p = document.createElement('p');
        p.innerHTML = `Frase ${i}`;

        div.appendChild(p);
        console.log(i);
    }
}
meuEscopo();