document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('gameBoard');
    const colors = [
        'red',           // Красный
        'blue',          // Синий
        'green',         // Зеленый
        'yellow',        // Желтый
        'pink',          // Розовый
        'orange',        // Оранжевый
        'limegreen',     // Ярко-зеленый
        'lightskyblue',  // Светло-синий
        'white'          // Белый
    ];

    function createHexagon() {
        const hex = document.createElement('div');
        hex.className = 'hexagon';
        hex.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Случайный цвет из массива
        hex.style.borderColor = 'transparent'; // Изначально граница прозрачная

        // Обработчик клика
        hex.addEventListener('click', () => {
            hex.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Случайный цвет из массива при каждом клике
        });

        // Обработчик наведения мыши
        hex.addEventListener('mouseover', () => {
            hex.style.borderColor = 'white'; // Изменение цвета границы при наведении
        });
        hex.addEventListener('mouseleave', () => {
            hex.style.borderColor = 'transparent'; // Сброс цвета границы при уходе курсора
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
