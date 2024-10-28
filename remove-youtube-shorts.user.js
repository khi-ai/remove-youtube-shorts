// ==UserScript==
// @name         Remove YouTube Shorts
// @namespace    https://github.com/khi-ai
// @version      0.1
// @description  Removes YouTube Shorts Videos
// @author       Steven Hall
// @match        http://*.youtube.com/*
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==
(
    () =>
    {
        const removeShorts = () =>
        {
            Array
                .from(document.querySelectorAll(`a[href^="/shorts"]`))
                .forEach
                (
                    a =>
                    {
                        let parent = a.parentElement;

                        while (parent && (!parent.tagName.startsWith('YTD-') || parent.tagName === 'YTD-THUMBNAIL'))
                        {
                            parent = parent.parentElement;
                        }

                        if (parent)
                        {
                            parent.remove();
                        }
                    }
                )
            ;
        }

        const observer = new MutationObserver(removeShorts);
        observer.observe
        (
            document,
            {
                childList:  true,
                subtree:    true,
            }
        );

        removeShorts();
    }
)();
