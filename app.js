const boutton = document.querySelector('.btn')
const span = document.querySelector('#text')

function getValue(){
    const inp = document.getElementById('Nom');
    rest= inp.value;
    
}

boutton.addEventListener('click', (event) => {
    event.preventDefault();

    span.innerText = `${rest}, votre Formulaire a été envoyé avec succes`;
})