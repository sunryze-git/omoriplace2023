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
        // Load the image
        const image = document.createElement("img");
        image.src = "https://github.com/sunryze-git/omoriplace2023/raw/main/template1overlay.png";
        image.onload = () => {
            image.style = `position: absolute; left: 0; top: 0; width: ${image.width/3}px; height: ${image.height/3}px; image-rendering: pixelated; z-index: 1`;
        };
      
        // Add the image as overlay
        const camera = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("garlic-bread-camera");
        const canvas = camera.querySelector("garlic-bread-canvas");
        canvas.shadowRoot.querySelector('.container').appendChild(image);
      
        // Add a style to put a hole in the pixel preview (to see the current or desired color)
        const waitForPreview = setInterval(() => {
            const preview = camera.querySelector("garlic-bread-pixel-preview");
            if (preview) {
              clearInterval(waitForPreview);
              const style = document.createElement('style')
              style.innerHTML = '.pixel { clip-path: polygon(-20% -20%, -20% 120%, 37% 120%, 37% 37%, 62% 37%, 62% 62%, 37% 62%, 37% 120%, 120% 120%, 120% -20%); }'
              preview.shadowRoot.appendChild(style);
            }
        }, 100);
    }, false);
}
