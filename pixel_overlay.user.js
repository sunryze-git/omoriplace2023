// ==UserScript==
// @name         r/OMORI place template
// @namespace    http://tampermonkey.net/
// @version      v1.0.2
// @description  OMORI WILL NOT SUCCUMB | PLEASE CONTACT THE DAMN DISCORD / SUBMIT COMMITS IF YOU NEED TO EDIT THIS!!!!!!!!
// @author       forked from a whole bunch of other people 
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("garlic-bread-embed")[0].shadowRoot.children[0].getElementsByTagName("garlic-bread-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/sunryze-git/omoriplace2023/main/output.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);
}
