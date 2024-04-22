console.log('This is the background page.');
console.log('Put the background scripts here.');
console.log('Clicked')
chrome.action.onClicked.addListener(() => {
    console.log('clicked')
    chrome.tabs.create({
        url: 'popup.html'
    });
})
