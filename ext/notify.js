

var options = {
    type: "basic",
    title: "My First Notification",
    message: "Bhai Ka Bhaukaal!",
    iconUrl: 'icons/icon16.png'
}

$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").append(" <b>Appended text</b>.");
    });
});

chrome.notifications.create(options,callback);

function callback() {
    console.log('Notified!')
}