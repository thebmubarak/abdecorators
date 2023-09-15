//header backgroud animation

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
jsAnimate(document.querySelectorAll(".sub-head"), 'g-card-inview', 'animate-g-card');
jsAnimate(document.querySelectorAll(".staffs"), 's-card-inview', 'animate-s-card');
jsAnimate(document.querySelectorAll(".staffs h2"), 'g-card-inview', 'animate-g-card');
jsAnimate(document.querySelectorAll(".staffs p"), 'f-card-inview', 'animate-f-card');
jsAnimate(document.querySelectorAll(".staffInfo"), 'f-card-inview', 'animate-f-card');