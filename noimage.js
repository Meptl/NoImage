"use strict";
var re_image_url = new RegExp(".*://.*/.*\.(jpg|jpeg|png|gif)");
var all = /.*/;

function blockImages(e) {
    return {cancel: true};
}

chrome.webRequest.onBeforeSendHeaders.addListener(blockImages,
        {urls: ["<all_urls>"]},
        ["blocking"]);

