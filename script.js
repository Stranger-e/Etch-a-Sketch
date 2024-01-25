const GRIDAREA = 600

let squares = 30

let gridContainer = document.querySelector('.gridcontainer')
gridContainer.style.width = `${GRIDAREA}px`
gridContainer.style.height = `${GRIDAREA}px`

function createGrid() {

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

createGrid()