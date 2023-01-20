function meuEscopo() {
    const div = document.querySelector('.frases');
    const paragraphs = div.querySelectorAll('p');

    const styleBody = getComputedStyle(document.body);
    const backgroundColorBody = styleBody.backgroundColor;

    for (let p of paragraphs) {
        p.style.backgroundColor = backgroundColorBody;
        p.style.color = '#ffffff';
    }
}
meuEscopo();