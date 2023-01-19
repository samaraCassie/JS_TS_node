function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const formularios = [];

    function recebeEventoFrom(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura= form.querySelector('.altura');
        const peso = form.querySelector('.peso');

        formularios.push({
            nome: nome?.value ?? '',
            sobrenome: sobrenome?.value ?? '',
            altura: altura?.value ?? '',
            peso: peso?.value ?? ''
        });

        console.log(formularios);

        resultado.innerHTML  = `<p>${nome?.value ?? ''} ${sobrenome?.value ?? ''} ${peso?.value ?? ''}Kg ${altura?.value ?? ''}m </p>`;
    }
    
    form.addEventListener('submit', recebeEventoFrom);
}
meuEscopo();