//Fazer com que a cor do fundo mudi  

const caixa = document.querySelector("body")
const cor = document.querySelector('input')

let corpadrao = '#fff'
    caixa.style.backgroundColor = `${corpadrao}`

//function mudar(){
  //  caixa.style.backgroundColor = ` ${cor.value}`
//}

function mudarcor(){
    caixa.style.backgroundColor = ` ${cor.value}`
}
