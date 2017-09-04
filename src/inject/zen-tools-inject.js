chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "loading") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/zen-tools-inject.js");
			// ----------------------------------------------------------

			$.get(chrome.extension.getURL('/src/inject/content/template.html'), function (data) {
				$(data).appendTo('body');
			});
		}
	}, 10);
});

//var port = chrome.runtime.connect('bnopdjlfbnjoplmbifohlmeglmomoakf');

window.addEventListener("message", function (event) {
	if (event.data.url) {
		alert(event.data.url);
	}

	console.log(event);
}, false);