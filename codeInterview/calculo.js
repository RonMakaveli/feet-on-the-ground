var n1 = parsedocument.getElementById('firstNumber').value;
var n2 = document.getElementById('secondNumber').value;

var resultado;

function calcOperation(operation){
    if (operation ==='adicionar'){
        resultado = n1 + n2;
    }

    console.log(resultado)
}