function calcOperation(operation){
    var n1 = document.getElementById('firstNumber').value;
    var n2 = document.getElementById('secondNumber').value;

    var resultado;

    if (operation === 'adicionar'){
        resultado = n1 + n2;
    } else if (operation === 'subtrair') {
    resultado = n1 - n2;
    } else if (operation === 'dividir') {
    resultado = n1 / n2;
    } else if (operation === 'multiplicar') {
    resultado = n1 * n2;
    }

    console.log(resultado);
}





