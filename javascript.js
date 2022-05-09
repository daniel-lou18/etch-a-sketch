function createGrid() {
    let numSquares = Number(prompt("Please tell us what size the grid should be:"));
    for (let i=1; i<numSquares+1; i++) {
        const container = document.querySelector('.container.main');
        const lineContainer = document.createElement('div');
        lineContainer.classList.add('container', 'line', `l-${i}`)
        lineContainer.style.display = 'flex';
        container.appendChild(lineContainer);
        const selectLine = document.querySelector(`.l-${i}`);
        selectLine.style.height = (100/numSquares) + '%';
        for (let j=1; j<numSquares+1; j++) {
            const square = document.createElement('div');
            square.classList.add('square', `l${i}-c${j}`);
            selectLine.appendChild(square);
        };
    };
}


createGrid();

function onSquare(e) {
    this.classList.add('on-square');
}

function leaveSquare(e) {
    this.classList.remove('on-square');
    this.classList.add('leave-square');
}
const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', onSquare));
squares.forEach(square => square.addEventListener('mouseout', leaveSquare));

