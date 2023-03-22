// ==UserScript==
// @name         3kh0 Ad Blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  An anti anti ad blocker for 3kh0
// @author       Russell2259
// @match        https://3kh0.net/*
// @match        https://3kh0.github.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=3kh0.net
// ==/UserScript==

(function() {
    'use strict';
    window.onload = () => {
        let interval = setInterval(() => {
            if (document.querySelector('#arlinablock')) {
                clearInterval(interval);
                document.querySelector('#arlinablock').remove();
                document.body.style = '';
            }
        }, 10);
        for (let i = 0; i < document.querySelectorAll('script').length; i++) {
            const el = document.querySelectorAll('script')[i];
            el.textContent = arbitraryHtmlString;
        }
    }
})();
