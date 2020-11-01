// ==UserScript==
// @name         В поисках Стаса
// @namespace    https://vk.com/
// @version      0.2.2
// @description  Вы потеряли стаса в диалогах Вк? Не беда! этот скрипт поможет вам с легкостью его найти. (наверное)
// @author       Setoko
// @match        https://vk.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ссылка на бокс
    let s_location = document.querySelector('.im-page--dialogs-header-controls._im_dialogs_header_controls');

    // создаем саму кнопку
    let s_button = document.createElement('button');
    s_location.prepend(s_button);
    s_button.classList.add('im-page--dialogs-header-control');
    s_button.onclick = s_onClick;

    // настройка визуала кнопки
    s_button.innerHTML = "<img src='https://i.imgur.com/AHi4B6Y.png'>";

    //событие
    function s_onClick() {
        document.location.href = "https://vk.com/im?sel=351198695";
    }

})();