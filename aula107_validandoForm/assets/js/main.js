class ValidForm{
  constructor(){
    this.formulario = document.querySelector('.formulario');
    this.events();
  }

  events() {
      this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.checkFields();
    this.checkPasswords();
  }

  checkFields() {
    let valid = true;
   
    for (let error of this.formulario.querySelectorAll('.error-text')) {
      error.remove();
    }

    for (let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText;

      if(!campo.value) {
        this.createError(campo, `insira "${label}"`);
        valid = false;
      }

      if (campo.classList.contains('usuario')) {
        if (!this.validUser(campo)) valid = false;
      }

      if (campo.classList.contains('cpf')){
        if (this.validCPF(campo)) valid = false;
      }

    }

    return valid;
  }

  createError(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = `<p>${msg}</p>`;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }

  validUser(campoUser){
    const user = campoUser.value;
    if(user.length < 3 || user.length > 12) {
      this.createError(campoUser, 'Usuário precisa ter entre 3 e 12 caracteres.');
      return false
    };
    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(campoUser, 'Usuário pode conter apenas letras e/ou números');
      return false
    };
    return true;
  }

  validCPF(campoCPF) {
    const cpf = new ValidCPF(campoCPF.value);

    if(!cpf.validate()) {
      this.createError(campoCPF, 'Insira um CPF válido');
      return false;
    }

    return true;
  }

  checkPasswords(){
    const password = this.formulario.querySelector('.senha');
    const passRepeat = this.formulario.querySelector('.repetir-senha');
    let valid = true;

    if(password.value.length < 6 || password.value.length > 12) {
      this.createError(password, 'A senha precisa ter entre 6 e 12 caracteres.');
      valid = false;
    }

    if (password.value !== passRepeat.value) {
      this.createError(passRepeat, 'Campos "Senha" e "Repetir Senha" precisar ser iguais.');
      valid = false;
    }
    return valid;
  }
}

const valid = new ValidForm();