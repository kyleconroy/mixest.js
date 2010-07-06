// ==UserScript==
// @name           Mixest Song Download
// @namespace      http://userscripts.org
// @description    Add a download button for songs on mixest.com
// @include        http://*mixest.com/*
// @version        0.10
// ==/UserScript==

(function () {
    if($){
	var audio = $("#jqjp_audio_0").val()
	var download = $("<a />", {
	    html: "&#x21E3",
	    href: audio,
	});
	$("#fave-panel").append(download);
    }
})();