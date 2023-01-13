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

    function getImg(peso, altura) {        
        return (peso / altura ** 2).toFixed(2) ;
    }

    function getNivelImc(imc) {
        if (imc>39.9) {
            return `Obecidade III`;
        } else if (imc>=34.9) {
            return `Obecidade II`;
        } else if (imc>=29.9) {
            return `Obecidade I`;
        }  else if (imc>=24.9) {
            return `levemente Acima do Peso`;
        } else if (imc>=18.5) {
            return `Peso Ideal`;
        } else{
            return `Abaixo do Peso`;
        }
    }
}
meuEscopo();