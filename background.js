var host = "http://tpb.pirateparty.org.uk";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: details.url.replace('googleapis.com','useso.com')};
    },
    {
        urls: [
            "*://*.googleapis.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
