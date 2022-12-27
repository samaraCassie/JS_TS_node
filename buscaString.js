function propriedadesString(obj) {
    for (prop in obj) {
        if (typeof obj[prop] === 'string') {
            console.log(prop, `:` ,obj[prop]);
        }
    }
}

const produto = {
    nome : 'Pão de Queijo',
    valor : 0.90,
    estoque : 50,
    sabor : 'Tradicional'
}

propriedadesString(produto);