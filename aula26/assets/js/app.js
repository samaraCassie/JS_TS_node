function meuEscopo() {
    const form = document.querySelector('#formulario');

    function recebeEventoForm(e) {
        e.preventDefault();
        const inputPeso = document.querySelector('#peso');
        const inputAltura = document.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso) {
            setResultado(`Peso Inválido`, false);
            return;
        }

        if (!altura) {
            setResultado(`Altura Inválida`, false);
            return;
        }

        const imc = getImc(peso, altura);
        const nivelImc= getNivelImc(imc);
        const msg = `Seu IMC é ${imc} (${nivelImc})`;
        setResultado(msg, true);
        return;
    }

    function getImc(peso, altura) {        
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

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = ``;
        const p = document.createElement('p');

        if (isValid) {
            p.classList.add('p-true');          
        } else{
            p.classList.add('p-false');
        }

        p.innerHTML = msg;
        resultado.appendChild(p);
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();