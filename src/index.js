import { open } from 'node:fs/promises';

async function appendToFile() {
  try {
    // Відкриття файлу для запису (створить файл, якщо його не існує)
    const filehandle = await open('example.txt', 'a');

    // Дані для додавання
    const data = 'Hello, World!';

    // Використання методу appendFile для додавання даних до файлу
    await filehandle.appendFile(data);

    // Закриття файла
    await filehandle.close();

    console.log('Дані успішно додані до файлу');
  } catch (err) {
    console.error('Помилка при додаванні даних до файлу:', err);
  }
}

// Виклик функції
appendToFile();
