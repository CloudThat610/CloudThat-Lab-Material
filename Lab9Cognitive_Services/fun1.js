$(function(){
    $('#btn1').click(function() {
        var params = {
            // Request parameters
            "numberOfLanguagesToDetect": 1,
        };
      var data = {"documents": [{"id": "string","text": $('#text-analytics-input').val()}]};
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/languages?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","b1b175006370408a9dfdbbd288f84971");
            },
            type: "POST",
            // Request body
			data : JSON.stringify(data),
            
        })
        .done(function(response) {
			console.log("Sucessful API Call");
			var temp = document.getElementById("random1");
			temp.innerHTML = '';
			temp.textContent = response['documents'][0]['detectedLanguages'][0]['name'];
			var textNode = document.createTextNode("response[documents][0][detectedLanguages][0][name]");
			//temp.appendchild(textNode);
            
        })
        .fail(function() {
         console.log("API Call Failed");
        });
    });
});
$(function(){
    $('#btn2').click(function() {
		var data = {"documents": [{"id": "string","text": $('#spell-check-text').val()}]};
		console.log("data is " + JSON.stringify(data['documents'][0]['text']));
        var params = {
            // Request parameters
            "mode": "spell",
            "mkt": "en-us",
			"Text" : JSON.stringify(data['documents'][0]['text'])
        };
      
        $.ajax({url: "https://api.cognitive.microsoft.com/bing/v5.0/spellcheck?" + $.param(params),
            beforeSend: function(xhrObj){
                //ha Request headers
                xhrObj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","c0f76ad4a42f405886abe8f6016159cd");
            },
            type: "POST",
            // Request body
            data: JSON.stringify(data),
        })//you're here
        .done(function(response) {
			console.log("Successful API Call");
			console.log(JSON.stringify(response));
			var temp = document.getElementById("random2");
			temp.innerHTML = '';
			
			
			temp.textContent = response['flaggedTokens'][0]['suggestions'][0]['suggestion'];
			var textNode = document.createTextNode("response[documents][0][detectedLanguages][0][name]");
			//temp.appendchild(textNode);
            
        })
        .fail(function() {
            alert("API Call failed");
        });
    });
});

