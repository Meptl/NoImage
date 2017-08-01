"use strict";

var blocking = true;

function blockRequest(req) {
    return { cancel: true };
}

function toggleBlocking() {
    blocking = !blocking;
}

chrome.webRequest.onBeforeRequest.addListener(blockRequest,
        {urls: ["<all_urls>"], types: ["image"]},
        ["blocking"]);

browser.browserAction.onClicked.addListener(toggleBlocking);
