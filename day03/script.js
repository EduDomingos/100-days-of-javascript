const randHex = document.querySelector('.ranHex')
const btnGen = document.querySelector('.btn-gen')

function hexGen(){
    const color = '#'+Math.random().toString(16).substring(2,8)

    randHex.innerHTML = color
    document.body.style.backgroundColor = color
    randHex.style.backgroundColor = color
}

btnGen.addEventListener('click', hexGen)