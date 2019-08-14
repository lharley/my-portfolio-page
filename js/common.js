// JavaScript Document
// GENERAL JAVASCRIPT FOR UX PROTOTYPE

function doAlert(curText){
	alert(curText);
}

function padString( num ) {
	return ( num < 10) ? '0' + num.toString() : num.toString();
}

function isRGBorHEX( curColor ) {
	
	var testChars = curColor.substring(0, 4);
	if (testChars == "rgb(" ) {
		return "rgb";
	} else if ( testChars[0] == "#" ){
		return "hex";
	} else {
		return 0;	
	}
}


function getRGBvalues(rgbColor){
		
	var strLength = rgbColor.length;
	var itemList = rgbColor.substring(4, (strLength - 1) ); 
	var listArray = itemList.split(',');
	
	return listArray;
}

function rgbToHex(R,G,B) {
	return toHex(R) + toHex(G) + toHex(B);
}

function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}

function lightenDarkenColor(col,amt) {
		var usePound = false;
		if ( col[0] == "#" ) {
			col = col.slice(1);
			usePound = true;
		}
	
		var num = parseInt(col,16);
	
		var r = (num >> 16) + amt;
	
		if ( r > 255 ) r = 255;
		else if  (r < 0) r = 0;
	
		var b = ((num >> 8) & 0x00FF) + amt;
	
		if ( b > 255 ) b = 255;
		else if  (b < 0) b = 0;
	
		var g = (num & 0x0000FF) + amt;
	
		if ( g > 255 ) g = 255;
		else if  ( g < 0 ) g = 0;
	
		return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

// get the number of properties or size of object
Object.size = function (obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
}