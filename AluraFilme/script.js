function adicionarFilme() {
  let filmeFavotiro = document.querySelector('#filme').value;
  let elementoListaFilmes = document.querySelector("#listaFilmes")

  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + `<a href="https://www.youtube.com/watch?v=sLk94T-hS78" target="_blank"> <img src="${filmeFavotiro}"/>  </a>`

  document.querySelector("#filme").value = ""


}