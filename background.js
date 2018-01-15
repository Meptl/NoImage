"use strict";

var blocking = true;

function blockRequest(req) {
    if (blocking) {
        return { cancel: true };
    } else {
        return {};
    }
}

function toggleBlocking() {
    blocking = !blocking;
}

chrome.webRequest.onBeforeRequest.addListener(blockRequest,
        {urls: ["<all_urls>"], types: ["image"]},
        ["blocking"]);

browser.browserAction.onClicked.addListener(toggleBlocking);
