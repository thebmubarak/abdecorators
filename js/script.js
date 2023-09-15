//header backgroud animation

home.style.backgroundImage = 'url("images/project1.jpg")';

var n = 1;

function auto() {
	if(n > 2){
		n = 0;
	}
	n ++;
	home.style.backgroundImage = 'url("images/project' + n + '.jpg")';
}
setInterval(auto, 2000);

var num = 0;

/*array1 = [
	"Working with AB decorators has been a pleasure from the first step of general design layout of my home to picking paint colour and funitures was easy and exciting, <br> <br>I highly recommend AB&nbsp;decorators.",
	"Thank you AB decorators for all of your fantastic design, i realize the project would not have gone as smoothly without your supervision and guidance.",
	"There are few words to describe AB decorators design, we can only describe them as creative, classy and with a great sense of spacing, they are simply the best designers, it is nice to work with true professional with high ethics and values."
]

array2 = [
	"Jibril Adamu",
	"George Elizabeth",
	"Tolu Ayomide"
]

//document.getElementById('name').src = array[n];
	var h2 = document.getElementById('testimonial').getElementsByTagName('h3')[0];
		h3 = document.getElementById('testimonial').getElementsByTagName('h4')[0];
		
function next() {
	clearInterval(interval1)
	if(num > 1) {
		num = -1;
	}
		num ++;
		h2.innerHTML = array1[num];
		h3.innerHTML = array2[num];
}

function prev() {
	clearInterval(interval1)
	if(num < 1) {
		num = 3;
	}
		num --;
		h2.innerHTML = array1[num];
		h3.innerHTML = array2[num];
}

function autoSlide() {
	if(num > 1) {
		num = -1;
	}
		num ++;
		h2.innerHTML = array1[num];
		h3.innerHTML = array2[num];
}
var interval1 = setInterval(autoSlide, 5000);
*/

function jsAnimate(h2s, inview, animate) {
	"use strict";
	
// define variables
	
// check if an element is in viewport
// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
	
//initialize the default look with js so that it does not affect the look when script is disabled
	for (var i = 0; i < h2s.length; i++) {
		h2s[i].classList.add(animate);
	}
		
//call back function codes
	function callbackFunc() {
		for (var i = 0; i < h2s.length; i++) {
			if (isElementInViewport(h2s[i])) {
				h2s[i].classList.add(inview);
			}
			else {
				h2s[i].classList.remove(inview);
			}
		}
	}
	
	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
};

jsAnimate(document.querySelectorAll(".ceo"), 'f-card-inview', 'animate-f-card');
jsAnimate(document.querySelectorAll(".services div"), 's-card-inview', 'animate-s-card');
jsAnimate(document.querySelectorAll("#about2 h3"), 'f-card-inview', 'animate-f-card');
jsAnimate(document.querySelectorAll("#about2 a"), 'f-card-inview', 'animate-f-card');
jsAnimate(document.querySelectorAll(".sub-head"), 'g-card-inview', 'animate-g-card');
jsAnimate(document.querySelectorAll(".projects p"), 'g-card-inview', 'animate-g-card');
jsAnimate(document.querySelectorAll("#contact>div>p"), 's-card-inview', 'animate-s-card');