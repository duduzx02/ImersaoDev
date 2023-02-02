let listaSeries = [];
listaSeries.push("https://m.media-amazon.com/images/I/91s48tDAHSL.jpg")
listaSeries.push("https://br.web.img2.acsta.net/pictures/17/09/29/21/15/4233147.jpg")
listaSeries.push("https://picfiles.alphacoders.com/460/thumb-460917.jpg")

let nomeSeries = [];
nomeSeries.push("Arrow")
nomeSeries.push("Flash")
nomeSeries.push("The Big bang Theory")



for (let index = 0; index < listaSeries.length; index++) {
  let serie = listaSeries[index];
  let nome = nomeSeries[index];
  document.write(`<img src="${serie}">`)
  document.write(`<h1>${nome}</h1>`)
}



// let index = 0;
// while (index < listaSeries.length) {
//   let serie = listaSeries[index];
//   document.write(`<img src="${serie}">`)
//   index ++;
// }


