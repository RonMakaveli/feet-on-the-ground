function calcularNota(): void {
    const notas: number[] = [
      parseFloat((document.getElementById("primeiraNota") as HTMLInputElement).value),
      parseFloat((document.getElementById("segundaNota") as HTMLInputElement).value),
      parseFloat((document.getElementById("terceiraNota") as HTMLInputElement).value),
      parseFloat((document.getElementById("quartaNota") as HTMLInputElement).value)
    ];
    const resultadoMedia: string = isNaN(notas.reduce((total, nota) => total + nota, 0) / notas.length)
      ? "Por favor, insira números válidos."
      : "Resultado: " + (notas.reduce((total, nota) => total + nota, 0) / notas.length);
    document.getElementById('resultadoMedia').innerText = resultadoMedia;
  }
  