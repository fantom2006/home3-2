const btnRed = document.querySelector('button[data-red]');
const btnYellow = document.querySelector('button[data-yellow]');
const btnGreen = document.querySelector('button[data-green]');


const body = document.querySelector('body')






btnRed.addEventListener('click', onColorRed)
btnYellow.addEventListener('click', onColorYellow)
btnGreen.addEventListener('click', onColorGreen)

btnRed.addEventListener('mouseover', () => {
    btnRed.style.cssText =  `
    color: red;`
})
btnRed.addEventListener('mouseout', () => {
    btnRed.style.cssText =  `
    color: black;`
})

btnYellow.addEventListener('mouseover', () => {
    btnYellow.style.cssText =  `
    color: yellow;`
})


btnYellow.addEventListener('mouseout', () => {
    btnYellow.style.cssText =  `
    color: black;`
})


btnGreen.addEventListener('mouseover', () => {
    btnGreen.style.cssText =  `
    color: green;`
})
btnGreen.addEventListener('mouseout', () => {
    btnGreen.style.cssText =  `
    color: black;`
})


let intervalId = null


function onColorRed(){
    intervalId = setTimeout(() => {
                body.style.backgroundColor = 'red'
                btnRed.style.backgroundColor = 'red'
            }, 1500)
}
function onColorYellow(){
    intervalId = setTimeout(() => {
        body.style.backgroundColor = 'yellow'
    }, 1500)
}
function onColorGreen(){
    intervalId = setTimeout(() => {
        body.style.backgroundColor = 'Green'
    }, 1500)
}

