// ==UserScript==
// @name AutoAgeCheckSteam
// @description Skip the "agecheck" page on the steam store
// @include *://store.steampowered.com/agecheck/*
// @author 0x6de
// @version 0.1
// ==/UserScript==

document.querySelector('#app_agegate select#ageYear').value = 1990;
ViewProductPage();