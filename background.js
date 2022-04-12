console.log("background.js")
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(function (o) {
    console.log('rule matched:', o);
});