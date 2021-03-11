// ==UserScript==
// @name         Safe-To-Spend One
// @namespace    http://tampermonkey.net/
// @version      0.561
// @description  Hide the total cash number, dark mode, more.
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

    // Hide the total cash
    addGlobalStyle('.StyledHeader-sc-1zehgg, button[data-cy="bridge-summary"] {display:none !important;}');
    // Increase prominence of spend pocket
    addGlobalStyle('button[aria-label="Spend pocket details"] div {font-size: 30px !important;line-height:30px;}');
    // Add "Safe to" before the spend pocket name
    addGlobalStyle('button[aria-label="Spend pocket details"] div.PocketContentDiv-sc-1kwy879.spending.StyledPocketTitleDiv-sc-1x61pf6:before {content: "Safe to " !important;}');

    // Bunch of color tweaks to make faux dark mode.
    addGlobalStyle('html { filter: invert(90%) hue-rotate(180deg) !important;}');
    addGlobalStyle('body img {filter: invert(90%) hue-rotate(180deg) contrast(1.01) saturate(1.03) brightness(1.02) !important;}');
    addGlobalStyle('.StyledPocketsLi-sc-17s7uta {filter: invert(90%) hue-rotate(180deg) contrast(1.01) saturate(1.03) brightness(1.02) !important;}');
    addGlobalStyle('.PocketContentDiv-sc-1kwy879 {color:#ffffff !important;}');
    addGlobalStyle('.StyledPocketContainerDiv-sc-cuylsu {background-color:#020202 !important;}');
    addGlobalStyle('.StyledNavBarContainerDiv-sc-11si6lv {border-top: 0px solid #ffdc0a; !important;}');
    addGlobalStyle('.StyledPocketIdentityContainerDiv-sc-12u16va {filter: invert(1) hue-rotate(180deg) !important;}');
    addGlobalStyle('svg, .StyledLogoDiv-sc-1w3h60o {filter: invert(1) hue-rotate(180deg) !important;}');
    addGlobalStyle('div[data-cy="activity-message"] {background-color: #888888 !important;}');
    addGlobalStyle('.StyledSection-sc-u4z415 svg {filter: invert(0) hue-rotate(0deg) !important;}');
    addGlobalStyle('.iDfcUd:not(:disabled).focused,.ewoOwM:not(:disabled).focused {background: linear-gradient(rgb(255, 255, 255) 93%, rgb(3 199 0) 95%);}');
    addGlobalStyle('.iDfcUd:not(:disabled):hover, .iDfcUd:not(:disabled):focus,.ewoOwM:not(:disabled):hover,.ewoOwM:not(:disabled):focus {border: 1px solid rgb(3 199 0);}');

})();
