let valorEmDolar = 1;
let quantidadeBitcoin = 1;
let cotacaoDoBitcoin = 118561.38;
let cotacaoDoDolar = 5.32
let nome = "Eduardo"
let valorEmKm

let valorEmReal = valorEmDolar * cotacaoDoDolar
let valorEmRealvsBitcoin = quantidadeBitcoin * cotacaoDoBitcoin


alert(`Olá, ${nome} a cotação do bitcoin em reais: R$ ${valorEmRealvsBitcoin.toFixed(2)}`)
alert(`Olá, ${nome} a cotação do dolar em reais: R$ ${valorEmReal.toFixed(2)}`)
