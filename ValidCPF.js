function ValidCPF(cpf) {
    Object.defineProperty(this, 'CPFClean', {
        get: () => cpf.replace(/\D+/g, '')
    });

    ValidCPF.prototype.validar = () =>{
        if (this.CPFClean === undefined) return false;
        if (this.CPFClean.length !== 11) return false;
        if (this.isSequence(this.CPFClean)) return false;

        const CPF9Digits = this.CPFClean.slice(0, 9);
        const digit1 = this.createDigit(CPF9Digits);
        const digit2 = this.createDigit(CPF9Digits + digit1);
        
        const CPFCompare = CPF9Digits + digit1 + digit2;

        return CPFCompare === this.CPFClean;
    };

    ValidCPF.prototype.createDigit = (CPF9Digits) =>{
        const CPFArray = Array.from(CPF9Digits);
        let counter = CPFArray.length + 1;
        const sum = CPFArray.reduce((sum, value) => {
            sum += (counter * Number(value));
            counter--;
            return sum;
        },0);

        const digit = 11 - (sum % 11);
        return digit > 9 ? '0' : String(digit);
    }

    ValidCPF.prototype.isSequence = (CPFClean) => (CPFClean[0].repeat(this.CPFClean.length)) === this.CPFClean ? true : false;
}

const cpf = new ValidCPF('144.557.139-05');
console.log(cpf.validar());