// ==UserScript==
// @name         Humblebundle Unsub Newsletter
// @namespace    hbunsub
// @version      1.0
// @description  Add an input button to the download page to easily unsub from the newsletter + some ad cleaning 
// @author       0x6de
// @include      https://www.humblebundle.com/user/settings*
// @include      https://www.humblebundle.com/downloads?*
// ==/UserScript==


function clearNewsletter() {
  window.addEventListener("load", function(event) {
  window.location.hash = "#payment-information";
  var inp = document.querySelectorAll("#subscribe-holder > label > input[type='checkbox']");
  for(var i =0; i < inp.length;i++){
    var check = inp[i];
    if(!check.disabled){
    check.checked = false;
    }
  }
  var boutton = document.querySelector("a.button-v2:nth-child(4)");
  boutton.addEventListener("click", function( event ) {
    setTimeout(function(){
      window.close();
    }, 1000);
  }, false);
  boutton.click();
  });
}

function clearDownload(){
  window.addEventListener("load", function(event) {
   if (document.querySelector(".js-cross-promo-container")) {
     document.querySelector(".js-cross-promo-container").innerHTML = "";
     document.querySelector(".js-cross-promo-container").style.display = 'none';
   }
   if (document.querySelector(".js-subproduct-whitebox-holder")) {
     document.querySelector(".js-subproduct-whitebox-holder").innerHTML = "";
     document.querySelector(".js-subproduct-whitebox-holder").style.display = 'none';
   }
   if (document.querySelector(".download-mosaic")) {
     document.querySelector(".download-mosaic").innerHTML = "";
     document.querySelector(".download-mosaic").style.display = 'none';
   }
   if (document.querySelector(".js-coupon-whitebox-holder")) {
    document.querySelector(".js-coupon-whitebox-holder").innerHTML = "";
    document.querySelector(".js-coupon-whitebox-holder").style.display = 'none';
   }
   if (document.querySelector("#site-xpromo-banner")) {
    document.querySelector("#site-xpromo-banner").innerHTML = "";
    document.querySelector("#site-xpromo-banner").style.display = 'none';
   }
    var divUnsub = document.createElement('div');
    divUnsub.innerHTML = '        \
     <div id="unsubButton" style="clear: both;text-align: center;display: inherit;" class="cta rectangular-button button-v2 red"> Unsubscribe Newsletter </div>  \
    ';
    document.querySelector('.key-container').appendChild(divUnsub);
    document.querySelector('#unsubButton').addEventListener('click', function (event) {
      window.open('https://humblebundle.com/user/settings');
    });
  });
}

if (window.location.href.indexOf("user/settings") > -1) {
  clearNewsletter();
}else {
  clearDownload();
}


