import { Modal } from './modal.js'
import { AlertError} from './alert-error.js'
import { calculateIMC, notANumber} from './utils.js'

// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')


// maneiras de criar e atribuir função a um evento
// essa função criada e atribuida como valor <- , só vai ser executada quando eu clicar no botão de submit
form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }
    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
  
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    // modalMessage.innerText = message
    Modal.message.innerText = message
    Modal.open()
}

// fechar a janela de erro ao digitar no campo
// evento é de nome input

// oninput sempre vai verificar se meu input que está recebendo o evento de input, ele vai perceber se eu estou alterando algo nele, e se estiver alterado, ele vai executar o evento toda vez que eu alterar.
inputWeight.oninput = () => {
    AlertError.close()
}

inputHeight.oninput = () => {
    AlertError.close()
}




 