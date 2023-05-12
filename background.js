//This script listens for when the user clicks the extension's icon in the Chrome toolbar. 

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        file: 'content.js'
    });
});
