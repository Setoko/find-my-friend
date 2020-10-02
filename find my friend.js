// ==UserScript==
// @name         В поисках Стаса
// @namespace    https://vk.com/
// @version      0.2
// @description  Вы потеряли стаса в диалогах Вк? Не беда! этот скрипт поможет вам с легкостью его найти. (наверное)
// @author       Setoko
// @match        https://vk.com/im*
// @grant        none
// ==/UserScript==

(function(){
    'use strict'

// активация скрипта после загрузки страницы
    window.addEventListener('load', function () {
        addButton(findHim)
    })

    function addButton(onclick) {
        // ссылка на бокс
        let location = document.querySelector('.im-page--dialogs-header-controls._im_dialogs_header_controls')
        // создаем саму кнопку
        let button = document.createElement('button')
        location.prepend(button)
        // настройка визуала кнопки
        button.classList.add('im-page--dialogs-header-control')
        // функционал кнопки
        button.innerHTML = "<img src='https://i.imgur.com/AHi4B6Y.png'>";
        button.onclick = onclick

        return button
    }

    function findHim() {
        document.location.href = "https://vk.com/im?sel=351198695"
    }
}())