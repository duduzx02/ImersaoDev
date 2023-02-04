let eduardo = {
  nome: "Eduardo",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
};

let augusto = {
  nome: "Augusto",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
};

let livia = {
  nome: "Lívia",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
};

let arthur = {
  nome: "Arthur",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
};

let elementoTabela = document.querySelector("#tabelaJogadores")

exibirNaTala();

function exibirNaTala() {
  elementoTabela.innerHTML = `
      <tr>
        <td>${eduardo.nome}</td>
        <td>${eduardo.vitoria}</td>
        <td>${eduardo.empate}</td>
        <td>${eduardo.derrota}</td>
        <td>${eduardo.pontos}</td>
        <td><button onClick="adicionarVitoria(eduardo)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(eduardo)">Empate</button></td>
        <td><button onClick="adicionarDerrota(eduardo)">Derrota</button></td>
      </tr>
      `
}
function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTala();
}
function adicionarEmpate(jogador) {
  jogador.empate++;
  jogador.pontos++;
  exibirNaTala();
}
function adicionarDerrota(jogador) {
  jogador.derrota++;
  exibirNaTala();
}