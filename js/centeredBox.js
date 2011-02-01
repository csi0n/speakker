function setPosition(){
	var centeredBox=$('.speakker');
	var w=$(document).width(), tw= centeredBox.width();
	centeredBox.css("left", (w-tw>0?((w/2)-(tw/2))+'px':0) );
};
	window.onload=function(){setPosition()};
	window.onresize=function(){setPosition()};