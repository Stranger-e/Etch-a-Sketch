const GRIDAREA = 600

let rows = 16
let columns =16

let gridContainer = document.querySelector('.gridcontainer')
gridContainer.style.width = `${GRIDAREA}px`
gridContainer.style.height = `${GRIDAREA}px`

function createGrid() {

    for (let i = 0; i < rows * columns; i++){
        let gridItem = document.createElement('div')

        gridItem.style.width = `${(GRIDAREA / columns) - 2}px`
        gridItem.style.heigh = `${(GRIDAREA / rows) - 2}px`
        gridItem.classList.add('griditem')
        gridContainer.appendChild(gridItem)
        
    }
}

createGrid()