

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete" ) {
		//clearInterval(readyStateCheckInterval);
        chrome.storage.local.get('Add',function (data) {
            if(data['Add']=='true'){
                var objj= {};
                objj['Add']= 'false'
                chrome.storage.local.set(objj)

               // console.log("--------------------")
                var url=String(window.location.href);

                chrome.storage.local.get(url, function(result) {

                    if(result[url]==undefined)
                    {
                        var price = parseFloat(document.getElementById('cerberus-data-metrics').getAttribute('data-asin-price'))

                        try{
                            var x= parseFloat(document.getElementById('priceblock_dealprice').innerHTML.split('>')[2])
                            if(price>x)
                            {
                                price=x

                            }
                        }
                        catch(e)
                        {
                            //console.log('error')
                        }
                        var obj= {};
                        obj[url]= price
                        chrome.storage.local.set(obj)

                    }

                });


            }
            else
            {
              //  console.log("NOt -----------")
            }

        })

        chrome.storage.local.get('Remove',function (data) {

            if(data['Remove']=='true')
            {
                var objj= {};
                objj['Remove']= 'false'
                chrome.storage.local.set(objj)

                var url=String(window.location.href);
                chrome.storage.local.remove(url)
               // console.log('REMOVE')
            }

        })



      //  console.log("Hello. This message was sent from scripts/inject.js");


	}
	}, 2000);
});

function check() {

}
