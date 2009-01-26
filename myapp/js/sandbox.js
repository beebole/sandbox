/*
    http://beebole.com
    19 Jan 2009

	This is a proof of concept, and we consider it as Public Domain.
    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

	http://github/beebole/sandbox
*/

function sandboxCall(apiUrl, callBack, sandboxUrl, localUrl){
	var localFile = localUrl;
	var id = ('ifr'+ Math.random(1000)).replace(/0\./,'');
	var ifr = /MSIE/.test(navigator.userAgent) ? 
		document.createElement('<iframe name="'+id+'" onload="window.$andbox.'+id+'()">'):
		document.createElement('iframe');
	if(!window.$andbox) window.$andbox = {};
	ifr.onload = window.$andbox[id] = function() {
	    try {
	        if (ifr.contentWindow.location != 'about:blank') {
				var result = ifr.contentWindow.name;
	            callBack(result);
	            setTimeout(function() {
	                ifr.parentNode.removeChild(ifr);
	                ifr = null;
	                delete window.$andbox[id];}, 0);}
	    } catch (e) {
			if(localFile)
        		ifr.contentWindow.location = localFile;
				localFile = null;}};

	ifr.style.display = 'none';
	ifr.src = sandboxUrl+'?nocache='+id+'&JSONP='+escape(apiUrl);
	ifr.name = id;
	document.body.appendChild(ifr);};