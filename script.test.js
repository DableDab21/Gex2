// tests.js

const { createHexagon } = require('./script'); // Импортируем функцию, которую мы хотим протестировать

describe('Hexagon creation', () => {
  test('Creating a hexagon sets initial background color to white', () => {
    const hex = createHexagon();
    expect(hex.style.backgroundColor).toBe('white');
  });

  test('Creating a hexagon sets initial border color to transparent', () => {
    const hex = createHexagon();
    expect(hex.style.borderColor).toBe('transparent');
  });
});

// Добавьте здесь другие тесты, проверяющие другие аспекты вашей логики
