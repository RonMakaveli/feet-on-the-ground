function calcOperation(operation){
    var n1 = parseFloat(document.getElementById('firstNumber').value);
    var n2 = parseFloat(document.getElementById('secondNumber').value);

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

    document.getElementById('resultado').innerText = "Resultado: " + resultado;
}

function adicionarDiv() {
    var div = document.createElement("div");
    div.className = "thirdContent";
  
    var input = document.createElement("input");
    input.type = "number";
    input.id = "thirdNumber";
    input.name = "thirdNumber";
    input.placeholder = "Insira o terceiro número";
    input.required = true;
  
    div.appendChild(input);
  
    var container = document.getElementById("container");
  
    container.appendChild(div);
  }



