let checkboxes = document.querySelector('#caixas');
let form = document.querySelector('#form');
let btn = document.querySelector('#btn'); 

btn.addEventListener('click', function enviar() {
    if(form.value == null || checkboxes.value == null) {
        window.alert('ERRO! Por favor preencha todo o formulário')
    } else {
        window.alert('Pesquisa enviada! Obrigada por participar')

    }
       

});