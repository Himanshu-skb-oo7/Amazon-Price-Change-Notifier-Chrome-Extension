
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		console.log("Babua")
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
                    console.log('error')
                }
                var obj= {};
				obj[url]= price
                chrome.storage.local.set(obj)
                
			}

        });


        console.log("Hello. This message was sent from scripts/inject.js");


	}
	}, 10);
});
