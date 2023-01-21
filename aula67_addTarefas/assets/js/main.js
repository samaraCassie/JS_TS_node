function meuEscopo() {
  const inputTarefa = document.querySelector('.input-tarefa');
  const btnAdd = document.querySelector('.btn-tarefa');
  const lista = document.querySelector('.tarefas');
  let txt;

  btnAdd.addEventListener('click', function(e) {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
    
  });

  function criarTarefa(value) {
    const li = document.createElement('li');
    li.innerHTML = value;
    lista.appendChild(li);
    criarBtnApagar(li);
    limparInput(li);
    salvarTarefas();
  }

  function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
  }
  
  function criarBtnApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = `Apagar`;
    btnApagar.classList.add('apagar');
    li.appendChild(btnApagar);
  }

  document.addEventListener('click', function(e) {
    const element = e.target;
    if (element.classList.contains('apagar')) {
      element.parentElement.remove(); 
      salvarTarefas();     
    }
  });

  function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
  
    for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);
    }
  
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
  }
  
  function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
  
    for(let tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
    }
  }
  adicionaTarefasSalvas();
}
meuEscopo();