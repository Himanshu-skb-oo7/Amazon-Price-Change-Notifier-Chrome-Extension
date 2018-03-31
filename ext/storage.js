document.getElementById("add").addEventListener("click", function () {
    var obj= {};
    obj['Add']= 'true'
    chrome.storage.local.set(obj)
    //console.log('clicked Add')
});

document.getElementById("remove").addEventListener("click", function () {
    var obj= {};
    obj['Remove']= 'true'
    chrome.storage.local.set(obj)
    //console.log('clicked Remove')
});