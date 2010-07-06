// ==UserScript==
// @name           Mixest Song Download
// @namespace      http://userscripts.org
// @description    Add a download button for songs on mixest.com
// @include        http://*mixest.com/*
// @version        0.10
// ==/UserScript==

(function () {
    if($){
	
	var download = $("<a />", {html: "&#x21E3;", href: ""})
	download.click(function(e){
	    var url = $("#jqjp_audio_0").attr("src")
	    download.attr("href", url)
	});

	$("#fave-panel").append(download)
	
    }
})();