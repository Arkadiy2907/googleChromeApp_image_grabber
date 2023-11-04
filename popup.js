const grabBtn = document.getElementById('grabBtn');
grabBtn.addEventListener('click', () => {
  // Получить активную вкладку браузера
  chrome.tabs.query({ active: true }, function (tabs) {
    const tab = tabs[0];
    // и если она есть, то выполнить на ней скрипт
    if (tab) {
      execScript(tab);
    } else {
      alert('There are no active tabs');
    }
  });
});

/**
 * Выполняет функцию grabImages() на веб-странице указанной
 * вкладки и во всех ее фреймах,
 * @param tab {Tab} Объект вкладки браузера
 */
function execScript(tab) {
  // Выполнить функцию на странице указанной вкладки
  // и передать результат ее выполнения в функцию onResult
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id, allFrames: true },
      func: grabImages,
    },
    onResult
  );
}

/**
 * Получает список абсолютных путей всех картинок
 * на удаленной странице
 *
 *  @return Array Массив URL
 */
function grabImages() {
  const images = document.querySelectorAll('img');
  return Array.from(images).map((image) => image.src);
}

/**
 * Выполняется после того как вызовы grabImages
 * выполнены во всех фреймах удаленной web-страницы.
 * Функция объединяет результаты в строку и копирует
 * список путей к изображениям в буфер обмена
 *
 * @param {[]InjectionResult} frames Массив результатов
 * функции grabImages
 */
function onResult(frames) {
  // Если результатов нет
  if (!frames || !frames.length) {
    alert('Could not retrieve images from specified page');
    return;
  }
  // Объединить списки URL из каждого фрейма в один массив
  const imageUrls = frames.flatMap((frame) => frame.result).filter(Boolean);

  openImagesPage(imageUrls);
}

function openImagesPage(urls) {
  // Открыть новую вкладку браузера с HTML-страницей интерфейса
  chrome.tabs.create({ url: 'page.html', active: false }, (tab) => {
    setTimeout(() => {
      // отправить список URL в новую вкладку
      chrome.tabs.sendMessage(tab.id, urls, (resp) => {
        // сделать вкладку активной
        chrome.tabs.update(tab.id, { active: true });
      });
    }, 500);
  });
}
