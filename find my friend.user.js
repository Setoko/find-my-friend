// ==UserScript==
// @name         В поисках Стаса
// @namespace    https://vk.com/
// @version      0.2.1
// @description  Вы потеряли стаса в диалогах Вк? Не беда! этот скрипт поможет вам с легкостью его найти. (наверное)
// @author       Setoko
// @match        https://vk.com/im*
// @grant        none
// ==/UserScript==

addButton(findHim);

function addButton(onclick) {

    // ссылка на бокс
    let location = document.querySelector('.im-page--dialogs-header-controls._im_dialogs_header_controls');

    // создаем саму кнопку
    let button = document.createElement('button');
    location.prepend(button);
    button.onclick = onclick;
    button.classList.add('im-page--dialogs-header-control');

    // настройка визуала кнопки
    button.innerHTML = "<img src='https://i.imgur.com/AHi4B6Y.png'>";

    return button
}

function findHim() {
    document.location.href = "https://vk.com/im?sel=351198695";
}
