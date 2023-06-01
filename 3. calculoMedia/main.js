function calcularNota() {
  let primeiraNota = document.getElementById("primeiraNota");
  let segundaNota = document.getElementById("segundaNota");
  let terceiraNota = document.getElementById("terceiraNota");
  let quartaNota = document.getElementById("quartaNota");
  let resultadoMedia;

  let nota1 = parseFloat(primeiraNota.value);
  let nota2 = parseFloat(segundaNota.value);
  let nota3 = parseFloat(terceiraNota.value);
  let nota4 = parseFloat(quartaNota.value);

  resultadoMedia = (nota1 + nota2 + nota3 + nota4) / 4;

  if (isNaN(resultadoMedia)) {
    document.getElementById('resultadoMedia').innerText = "Por favor, insira números válidos.";
  } else {
    document.getElementById('resultadoMedia').innerText = "Resultado: " + resultadoMedia;
  }
}