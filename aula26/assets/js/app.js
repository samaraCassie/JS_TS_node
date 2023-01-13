function meuEscopo() {
    function recebeEventoForm(e) {
        e.preventDefault();

        const form = document.querySelector('#formulario');
        const resultado = document.querySelector('#resultado');
        const inputPeso = document.querySelector('#peso');
        const inputAltura = document.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        const msg;

        if (!peso) {
            msg = `Peso Inválido`;
            return false;
        }

        if (!altura) {
            msg = `Altura Inválida`;
            return false;
        }
    }
}
meuEscopo();