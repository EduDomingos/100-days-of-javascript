// const addBtn = document.querySelector('.add')
// const resetBtn = document.querySelector('.reset')
// const subBtn = document.querySelector('.subtract')

const count = document.querySelector('.count')
const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', (e)=>{
    if (e.target.classList.contains('add')) {
        count.innerHTML++
        setColor()
    }
    if (e.target.classList.contains('subtract')) {
        count.innerHTML--
        setColor()
    }
    if (e.target.classList.contains('reset')) {
        count.innerHTML=0
        setColor()
    }
})

// addBtn.addEventListener('click', ()=>{
//     count.innerHTML++;
// })

// subBtn.addEventListener('click', ()=>{
//     count.innerHTML--;
// })

// resetBtn.addEventListener('click', ()=>{
//     count.innerHTML = 0;
// })


function setColor(){
    if(count.innerHTML > 0) {
        count.style.color = "greenyellow"
    } else if(count.innerHTML < 0) {
        count.style.color = "red"
    } else {
        count.style.color = "white"
    }
}