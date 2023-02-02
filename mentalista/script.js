let numeroSecreto = parseInt(Math.random() + 1 * 1001);
let chute;

let contador = 0;

while (chute != numeroSecreto) {
  chute = prompt('Digite novamente entre 0 e 1000: ');
  contador++;
  if (contador <= 10) {
    if (chute == numeroSecreto) {
      alert("Acertou!!")
    } else if (chute > numeroSecreto) {
      alert("Errou... o numero secreto é menor do que " + chute)
    } else if (chute < numeroSecreto) {
      alert("Errou... o numero secreto é maior do que " + chute)
    }

    alert(`Você já justou ${contador} chutes.`)
  } else {
    alert("Números de tentativas esgotadas!")
  }
}

