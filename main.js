const form = document.getElementById('form-validar');

function ValidarFormulario (ValorA,ValorB){

    return ValorB>ValorA;
}


form.addEventListener ('submit', function(e) {
    let formEValido=false;
    e.preventDefault();

const ValorA = document.getElementById ('ValorA').value;
const ValorB = document.getElementById ('ValorB').value;
const mensagemSucesso = `Valor B maior que valor A! `;



formEValido = ValidarFormulario (ValorA, ValorB)
if (formEValido) {
    alert(mensagemSucesso);

    ValorA.value = '';
    ValorB.value = '';

} else{
    alert("Valor A maior que valor B!")
}

})

console.log(form);