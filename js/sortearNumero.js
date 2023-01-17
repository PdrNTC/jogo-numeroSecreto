const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio ()

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('O numero secreto: ', numeroSecreto)


// Transformando os numeros maior e menor valor dinamicamente na pagina.
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor;