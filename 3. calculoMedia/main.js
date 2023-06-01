function calcularNota() {
  const notas = [
    parseFloat(document.getElementById("primeiraNota").value),
    parseFloat(document.getElementById("segundaNota").value),
    parseFloat(document.getElementById("terceiraNota").value),
    parseFloat(document.getElementById("quartaNota").value)
  ];
  const resultadoMedia = isNaN(notas.reduce((total, nota) => total + nota, 0) / notas.length)
    ? "Por favor, insira números válidos."
    : "Resultado: " + (notas.reduce((total, nota) => total + nota, 0) / notas.length);
  document.getElementById('resultadoMedia').innerText = resultadoMedia;rfsduhdoj
}