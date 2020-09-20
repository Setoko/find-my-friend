// ==UserScript==
// @name         В поисках Стаса
// @namespace    https://vk.com/
// @version      0.1
// @description  Вы потеряли стаса в диалогах Вк? Не беда! этот скрипт поможет вам с легкостью его найти.
// @author       Setoko
// @match        https://vk.com/im
// @grant        none
// ==/UserScript==

(function(){
    'use strict'

// активация скрипта после загрузки страницы
    window.addEventListener('load', function () {
        addButton('Стас', findHim)
    })

    function addButton(text, onclick, cssObj) {
        cssObj = cssObj || {position: 'absolute', bottom: '90.5%', right:'42%', 'z-index': 3}
        let button = document.createElement('button'), btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.onclick = onclick
        Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
        return button
    }
    function findHim() {
        alert('hemllo')
    }
}())