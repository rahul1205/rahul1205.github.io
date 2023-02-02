
/* ----------------------- 
    GLOBALS 
-------------------------*/
var sections = [
		{	sentence: " an enthusiastic developer based in Halifax",
		},
		{	sentence: " a lover of learning new things",
		},
		{	sentence: " complaining about stuff",
		},
		{	sentence: " a food hogger",
		},
		{	sentence: " interested in Python",
		},
		{	sentence: " interested to be a data analyst someday",
		},
		{	sentence: " making web applications 9to6",
		},
		{	sentence: " a travelholic",
		},
		{	sentence: " a bird of passage",
		},
		{	sentence: " thinking what to write next",
		},
		{	sentence: " thinking of ways to be famous",
		},
		{	sentence: " is a machine learning enthusiast",
		},
		{	sentence: " a Masters student @Dalhousie University",
		},
		{	sentence: " thinking of beaches and blue water",
		},
		{	sentence: " stuffing himself with pizza",
		},
		{	sentence: " kicking some developers' asses",
		},
		{	sentence: " curious to know you",
		},
		{	sentence: " trying to build up his portfolio",
		},
		{	sentence: " a Dragon Ball Z fan",
		}
	];
var i = 0;
var j = 0;
var k = 0;
var lengthSentence = 0;
var lengthArray = sections.length;
var forward = true;
var beginning = "Rahul <br>Anand is";
var currentPart = "";
var interval = 50;
var opening = false;


/* ----------------------- 
    TYPING 
-------------------------*/
function writing(text){
	lengthSentence = sections[i].sentence.length;
	var body = $("body");
	if(!opening){ // first part
		setTimeout(function(){	
			if(k < beginning.length){
				if(beginning[k] === "<"){
					currentPart += ' <br id="brName">';
					k=k+4;
				}
				currentPart += beginning[k];
				text.html(currentPart);
				k++;
				writing(text);			
			}else if(k === (beginning.length)){
				currentPart += " <br>";
				text.html(currentPart);
				opening = true;
				writing(text);
			}
		},interval);
	}else if(opening){ // sentences
		setTimeout(function(){
			interval = 50;
			if(j === lengthSentence){
				forward = false;
			}
			if(j === lengthSentence-2){
				$(".afterTyping").one().addClass("onScreen");
			}
			if( j === lengthSentence-1 && forward){
				interval = 2000;
			}
			if(j < lengthSentence && forward ){
				if(sections[i].sentence[j] === "&"){
					currentPart += "<strong>";
				}else if(sections[i].sentence[j] === "%"){
					currentPart += "</strong>";
				}
				else{
					currentPart += sections[i].sentence[j];
				}
				text.html(currentPart);
				j++;
			}else if(j > 0 && !forward){
				if(sections[i].sentence[j] === "&"){
					currentPart = currentPart.slice(0, - 8);
				}else if(sections[i].sentence[j] === "%"){
					currentPart = currentPart.slice(0, - 9);
				}
				else{
					currentPart = currentPart.slice(0, - 1); 
				}
				text.html(currentPart);
				j--;
			}else if(j === 0){
				forward = true;
				/*body.css({
					"background" : sections[i].background});*/
				i++; // loop fra sezioni
			}
			if(i === lengthArray){
				i = 0;
			}
			writing(text);
		}, interval);
	}
}


/* ----------------------- 
    BACKGROUND LOOP 
-------------------------*/
function rand(min, max) {
    return min + Math.random() * (max - min);
}
function changebackground(){
	var body = $("body");
    var h = rand(1, 360);
    var s = rand(80, 90);
    var l = rand(50, 60);
    var h2;
    if(h < 180){
    	h2 = h + 180;
    }else{
    	h2 = h - 180;
    }
    body.css({ // looping background
    	"background" : "hsl(" + h + "," + s + "%,"+ l + "%)"
    });
    $(".fixedBg").css({ // background on hover
    	"background" : "hsl(" + h + "," + s + "%,"+ l + "%)",
    	"color" : "hsl(" + h2 + "," + s + "%,"+ l + "%)"
    });
    /*$(".loopCol").css({
    	"background" : "hsl(" + h + "," + s + "%,"+ l + "%)"
    });*/
	$(".coloredHover").css({ // color links on hover
    	"color" : "hsl(" + h + "," + s + "%,"+ l + "%)"
    });

}



/* ----------------------- 
    COLORS LOOP - OLD // LINKS COLOR
-------------------------*/
function loopColors(){
	var selector = $(".loopCol");
    var h = rand(1, 360);
    var s = rand(0, 100);
    var l = rand(0, 80);
    selector.css({
    	"color" : "hsl(" + h + "," + s + "%,"+ l + "%)"
    });
}


/* ----------------------- 
    NOOB SHIT 
-------------------------*/
	
$(document).ready(function(){
	/*--------------------
		BACKGROUND STUFF
	----------------------*/
	changebackground();
	setTimeout(function(){
		$("body").removeClass("noTransition");
		$("fixedBg").removeClass("noTransition");
		changebackground();
	}, 2000)   
	setInterval(function(){
		changebackground();
	}, 20000);


	/*--------------------
		TYPING 
	----------------------*/
	var firstTimer = 5000;
	var text = $(".jstext");
	setTimeout(function(){
		writing(text);
		//incipit(text);
	}, firstTimer);
	/*setTimeout(function(){
	}, secondTimer);*/


	/*--------------------
		HOVER 
	----------------------*/
	if( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ){
    	$("body").addClass("firefoxFix");
	}
});


/*--------------------
		HAVING FUN WITH TWEENMAX 
----------------------*/
$(document).ready(function($) {
	var bgFixed = $(".fixedBg");
	var elements = $(".fixedBg span");
	var triggerHover = $(".loopCol");
	tlHoverIn = new TimelineMax();
	tlHoverOut = new TimelineMax();


	triggerHover.hover(
		function() {
			tlHoverIn
				.to($(this).next(".fixedBg"), 0.5, {autoAlpha: 1})
				.to($(this).next(".fixedBg").find("span:nth-of-type(1)"), 0.8, { y: 0, ease: Expo.easeOut}, '0')
				.to($(this).next(".fixedBg").find("span:nth-of-type(2)"), 0.8, { y: 0, ease: Expo.easeOut}, '0.02')
				.to($(this).next(".fixedBg").find("span:nth-of-type(3)"), 0.8, { y: 0, ease: Expo.easeOut}, '0.04')
				.to($(this).next(".fixedBg").find("span:nth-of-type(4)"), 0.8, { y: 0, ease: Expo.easeOut}, '0.06');
		},
		 function() {
		 	tlHoverOut
				.to($(this).next(".fixedBg"), 0.5, {autoAlpha: 0})
				.to($(this).next(".fixedBg").find("span:nth-of-type(1)"), 0.8, { y: 20, ease: Expo.easeOut}, '0')
				.to($(this).next(".fixedBg").find("span:nth-of-type(2)"), 0.8, { y: 40, ease: Expo.easeOut}, '0.02')
				.to($(this).next(".fixedBg").find("span:nth-of-type(3)"), 0.8, { y: 60, ease: Expo.easeOut}, '0.04')
				.to($(this).next(".fixedBg").find("span:nth-of-type(4)"), 0.8, { y: 80, ease: Expo.easeOut}, '0.06');
		}
	);
});

















