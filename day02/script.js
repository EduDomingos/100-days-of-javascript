var ranNum = document.querySelector('.ranNum')
var btn = document.querySelector('.btn-gen')

function generate(){
    ranNum.innerHTML = Math.ceil(Math.random()*10)
}

btn.addEventListener('click', generate)