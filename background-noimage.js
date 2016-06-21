"use strict";

function blockRequest(e) {
    return {cancel: true};
}

chrome.webRequest.onBeforeRequest.addListener(blockRequest,
        {urls: ["<all_urls>"], types: ["image"]},
        ["blocking"]);

