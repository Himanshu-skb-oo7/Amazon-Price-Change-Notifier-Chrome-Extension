
$(document).ready(function () {
    $(function () {
        check()
        setInterval(check,20000)
    });

});

function check() {
    chrome.storage.local.get(null, function(items) {
        var allKeys = Object.keys(items);

        allKeys.forEach(function(entry) {
            var url= String(entry)
          //  console.log(items[url]+" "+url);

                $.get(url,function (data){
                    var htmlData=data
                    var price= parseFloat($(htmlData).find('#cerberus-data-metrics').attr('data-asin-price'))
                    var title = $(htmlData).filter('title').text();
                   // console.log(price+" "+title)
                    try{
                        var x=String($(htmlData).find('#priceblock_dealprice')[0].innerText).trim();
                        if(price>parseFloat(x))
                        {
                            price=parseFloat(x)

                        }

                      //  console.log(price)

                    }
                    catch(e)
                    {
                        //console.log('error')
                    }

                    chrome.storage.local.get(url,function (result) {
                        var obj= {};
                        obj[url]= price

                        if (result[url]!=price)
                        {
                            chrome.storage.local.set(obj)
                            notify(title,result[url],obj[url])
                        }

                    })
                })



        });

    });
}


chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

function notify(url,prevprice,newprice) {

    var options = {
        type: "basic",
        title: "Price Change in Listed Product",
        message: String(url)+' PrevPrice: '+prevprice+' NewPrice: '+newprice,
        iconUrl: 'icon166.png'
    }


    chrome.notifications.create(options,callback);

    function callback() {
      //  console.log('Notified!')
    }
}