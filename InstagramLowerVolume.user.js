// ==UserScript==
// @name Instagram Lower Volume
// @namespace add videos controls and automatically lower volume
// @author 0x6de
// @include https://www.instagram.com/*
// @exclude *://*.instagram.com/*/*/embed/
// @grant none
// ==/UserScript==


function FixVid() {
  var i = setInterval(function(){
    if (!document.querySelector("video")) {
    }else { 
      clearInterval(i);
      var v = document.querySelector("video");
      v.onplay = function() {
        v.volume = 0.2;
        v.controls = true;
        v.setAttribute("controls","controls");
        v.style.zIndex = "1";
      }; 
      }
  }, 250);
};

//event
window.addEventListener("load", FixVid); 
document.addEventListener("selectionchange", FixVid);

//disable the visibilitychange event that pause the video when tab is not focused 
for (event_name of ["visibilitychange", "webkitvisibilitychange", "blur"]) {
  window.addEventListener(event_name, function(event) {
        event.stopImmediatePropagation();
    }, true);
};
