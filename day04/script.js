// VARIABLES
const modal = document.querySelector('.modal'),
    btn = document.querySelector('#btn'),
    closeX = document.querySelector('.close')

btn.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)
closeX.addEventListener('click', closeModal)

// OPEN MODAL
function openModal(e) {
    e.preventDefault()
    modal.style.display = 'block'
}

// CLOSE MODAL
function closeModal() {
    modal.style.display = 'none'
}