function meuEscopo() {
  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function recebeEventoClick(e) {
    const element = e.target;
    console.log(element);

    if (element.classList.contains('iniciar')) {
      clearInterval(timer);
      iniciarRelogio();
      relogio.classList.remove('pausado');
    }

    if (element.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }

    if (element.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = `00:00:00`;
      segundos = 0;
    }
  }

  function formataHora(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  function iniciarRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = formataHora(segundos);
    }, 1000);
  }

  document.addEventListener('click', recebeEventoClick);
  console.log(formataHora(segundos));
}
meuEscopo();