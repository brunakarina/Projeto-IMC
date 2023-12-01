export const Modal = {
    // propriedade e valor
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
    // modalWrapper.classList.add('open')
    Modal.wrapper.classList.add('open')
    },
    close() {
    // modalWrapper.classList.remove('open')
    Modal.wrapper.classList.remove('open')
    },
}

// quando a arrow function só tem uma linha vc pode tirar as chaves {}
// modalBtnClose.onclick = () => {
    Modal.buttonClose.onclick = () => {
        Modal.close()
    }

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if(event.key === 'Escape') {
        Modal.close()
    }
}