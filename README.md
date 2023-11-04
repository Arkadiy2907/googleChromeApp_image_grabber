# googleChromeApp_image_grabber

### Описание приложения "googleChromeApp_image_grabber":

Расширение для Google Chrome предназначенное для копирования изображений на текущей странице

### Основные функции приложения:

Реализованы функции выбора и сохранения как выборочных картинок сайта так и полной его коллекции

### Стек:

Использовал HTML5, CSS3, JS, JSZip: https://stuk.github.io/jszip/

### Установка зависимостей:

Не опубликовано, потому:

- клонируем git clone https://github.com/Arkadiy2907/googleChromeApp_image_grabber.git
- в браузере Google Chrome открываем Extensions -> Manage Extensions.
- включаем Developer mode (правый верхний угол)
- через кнопку 'load unpacked'(левый верхний угол) указываем путь где находится клонированное расширение
- в таблице в центре (All Extensions) должно появиться расширение "Image Grabber"
- в самом "Image Grabber" сдвинуть ползунок в активное положение (правый нижний угол расширения)
- выключить режим Developer mode (правый верхний угол)

### Запуск приложения:

выводим логотип расширения в экран браузера и по необходимости кликаем на него

### Что в доработке:

### P.S.:

Картинки под CORS не скачает, будет просто архив без этих рисунков!!!
Но чтоб скачать можно выбрать все.

Делал сам, на основе статьи https://habr.com/ru/articles/703330/

MIT License

Copyright (c) 2022 Andrey Germanov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
