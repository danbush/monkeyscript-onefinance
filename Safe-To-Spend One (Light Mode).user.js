// ==UserScript==
// @name         Safe-To-Spend One Light Mode
// @namespace    http://tampermonkey.net/
// @version      0.55
// @description  Hide the total cash number, more.
// @author       Dan Bush
// @match        https://web.onefinance.com/*
// @grant        none
// ==/UserScript==

(function() {
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('.StyledHeader-sc-1zehgg, button[data-cy="bridge-summary"] {display:none !important;}');
    addGlobalStyle('button[aria-label="Spend pocket details"] div {font-size: 30px !important;line-height:30px;}');
    addGlobalStyle('button[aria-label="Spend pocket details"] div.PocketContentDiv-sc-1kwy879.spending.StyledPocketTitleDiv-sc-1x61pf6:before {content: "Safe to " !important;}');
})();
