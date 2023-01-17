const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

//criando o objeto de reconhecimento e transformando para portugues
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

//criando evento para quando alguem falar
recognition.addEventListener('result', onSpeak);

function onSpeak(evento) {
    chute = evento.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

//Funcao que ira exibir na tela dinamicamente o que for dito pelo user.
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

//Adicionando evendo para quando acabar o reconhecimento, iniciar novamente.
recognition.addEventListener('end', () => recognition.start())

