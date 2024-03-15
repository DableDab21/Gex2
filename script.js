// script.js
document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('gameBoard');
    const colors = [
        'white',         // Белый
        'red',           // Ярко-красный
        'green',         // Зеленый
        'limegreen',     // Ярко-зеленый
        'blue',          // Синий
        'lightskyblue',  // Светло-синий
        'yellow',        // Желтый
        'pink',          // Розовый
        'orange'         // Оранжевый
    ];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function createHexagon() {
        const hex = document.createElement('div');
        hex.className = 'hexagon';
        const color = getRandomColor(); 
        hex.style.backgroundColor = color;
        hex.addEventListener('click', () => {
            console.log('Гексагон кликнут!');
        });
        
        hex.addEventListener('mouseover', () => {
            hex.style.borderColor = color; // При наведении цвет обводки меняется на цвет фона
        });
        hex.addEventListener('mouseleave', () => {
            hex.style.borderColor = 'black'; // Когда курсор мыши уходит, обводка возвращается к черному цвету
        });

        return hex;
    }

    function createHexRow() {
        const row = document.createElement('div');
        row.className = 'hex-row';
        return row;
    }

    function fillBoard() {
        const rows = 21; 
        const cols = 47; 
        for (let row = 0; row < rows; row++) {
            const hexRow = createHexRow();
            for (let col = 0; col < cols; col++) {
                hexRow.appendChild(createHexagon());
            }
            board.appendChild(hexRow);
        }
    }

    fillBoard();
});
