function verificarVelocidade(velocidade) {
    if (velocidade <= 70) {
        return `ok`;
    } else {
        velocidade -= 70;
        velocidade /= 5;
        if (velocidade <= 12 && velocidade >= 1) return `${Math.floor(velocidade)}`;
        if (velocidade > 12) return `Carteira Suspensa`;
    }
}

console.log(verificarVelocidade(124));
