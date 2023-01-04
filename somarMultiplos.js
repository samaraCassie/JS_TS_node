function somar(num) {
    let mult3 = 0;
    let mult5 = 0;
    for (let i = 0; i <= num; i++) {
        if(i % 3 == 0) mult3 += i;
        if(i % 5 == 0) mult5 += i;
    }
    console.log(mult3 + mult5);
}

somar(10);