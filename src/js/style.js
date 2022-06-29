/*******************************
 * Name : Styles.js
 * Auteur : Z4ck
 * Date : 28/06/2022
 * Version : 0.1
 ******************************/


"use strict";

/************************************************
 *  Build chapters
 ************************************************/
let chapitres = document.querySelectorAll("chapitre");
chapitres.forEach((el) => {
    // Get chapter's title.
    if(el.getAttribute("titre")) {
        let title = document.createElement("div");
        title.className = "titre";
        title.innerHTML = el.getAttribute("titre").valueOf(); //el.childNodes[0].nodeValue;
        el.insertBefore(title,el.firstChild);
    }
});

/************************************************
 *  Build sous-chapitres
 ************************************************/
let schapitres = document.querySelectorAll("sous-chapitre");
schapitres.forEach((el) => {
    // Get sous-chapitre title.
    if(el.getAttribute("titre")) {
        let title = document.createElement("div");
        title.className = "titre";
        title.innerHTML = el.getAttribute("titre").valueOf();
        el.insertBefore(title,el.firstChild);
    }
});

/*************************************************
 * Clear coding structure
 ************************************************/

let codings = document.querySelectorAll("code");
codings.forEach((el)=> {
    console.log(el.textContent);
//    el.innerHTML = el.textContent.replace(/(\t|\w|\.)\n/g,'$1<br>');
//    el.textContent = el.textContent.replace(/\t{1,}/g,'hello ');

});