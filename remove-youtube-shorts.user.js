// ==UserScript==
// @name         Remove YouTube Shorts and Rich Section
// @namespace    https://github.com/khi-ai
// @version      0.2
// @description  Removes YouTube Shorts Videos and Rich Section
// @author       khi-ai
// @match        http://*.youtube.com/*
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(() => {
    const removeElements = () => {
        // Xóa các video YouTube Shorts
        Array.from(document.querySelectorAll('a[href^="/shorts"]')).forEach(a => {
            let parent = a.parentElement;
            while (parent && (!parent.tagName.startsWith('YTD-') || parent.tagName === 'YTD-THUMBNAIL')) {
                parent = parent.parentElement;
            }
            if (parent) {
                parent.remove();
            }
        });

        // Xóa phần tử #content trong ytd-rich-section-renderer
        document.querySelectorAll('#content.ytd-rich-section-renderer').forEach(content => {
            content.remove();
        });
    };

    const observer = new MutationObserver(removeElements);
    observer.observe(document, {
        childList: true,
        subtree: true,
    });

    removeElements();
})();
