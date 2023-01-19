  
    const h1 = document.querySelector('.dt-hr');
    const data = new Date();
    const options = {
        dateStyle: 'full',
        timeStyle: 'short'
    }
    h1.innerHTML = data.toLocaleDateString('pt-br', {dateStyle: "full"} );
