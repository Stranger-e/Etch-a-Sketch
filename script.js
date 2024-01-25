const GRIDAREA = 600

let squares = 30

let sliderContainer = document.querySelector('.slider-container')
let slider = document.querySelector('.slider')
let inputValue = document.querySelector('.inputvalue')
let blackTheme = document.querySelector('.black')
let body = document.querySelector('body')
let head = document.querySelector('h1')

blackTheme.addEventListener('click', function() {
    body.style.backgroundColor = 'black'
    inputValue.style.color = 'white'
    head.style.color = 'white'
})

let gridContainer = document.querySelector('.gridcontainer')
gridContainer.style.width = `${GRIDAREA}px`
gridContainer.style.height = `${GRIDAREA}px`

function createGrid(squares) {

    for (let i = 0; i < squares * squares; i++){
        let gridItem = document.createElement('div')

        gridItem.style.width = `${(GRIDAREA / squares) - 2}px`
        gridItem.style.heigh = `${(GRIDAREA / squares) - 2}px`
        gridItem.classList.add('griditem')
        gridContainer.appendChild(gridItem)
        
        gridItem.addEventListener('mouseover', function (){
            gridItem.style.backgroundColor = 'black'
        })
    }
}

function removeGridItem(){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

slider.oninput = function(){
    removeGridItem()
    createGrid(this.value)
    inputValue.textContent = `${this.value} X ${this.value} Sauares`
}



createGrid()