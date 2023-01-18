class ValidaCPF{
    constructor(cpf) {
        Object.defineProperty(this, 'CPFClean', {
            get: () => cpf.replace(/\D+/g, '')
        })
    }

    validar() {
        if (this.CPFClean === undefined) return false;
        if (this.CPFClean.length !== 11) return false;
        if (this.isSequence(this.CPFClean)) return false;
        if (!String(this.CPFClean)) return false;

        const CPF9Digits = this.CPFClean.slice(0, 9);
        const digit1 = this.createDigit(CPF9Digits);
        const digit2 = this.createDigit(CPF9Digits + digit1);
        
        const CPFCompare = CPF9Digits + digit1 + digit2;

        return CPFCompare === this.CPFClean;
    }

    createDigit(CPF9Digits) {
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

    isSequence(CPFClean) {
        return (CPFClean[0].repeat(this.CPFClean.length)) === this.CPFClean;
    }
}

const cpf = new ValidaCPF('14455713905');
console.log(cpf.validar());