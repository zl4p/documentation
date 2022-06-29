
let conteneur = document.getElementById("main");
let ConteneurText = conteneur.textContent;


function insertBR(text) {
    return text.replace(/(\w|\.)\n/g,'$1<br>');
}

function insertTitreDoc(text) {
    return text.replace(/\[\[([^\]]+)]]/gi,"<h1 class='title'>$1</h1>");
}
function insertTitre(text) {
    text = text.replace(/\[(\d+)\s([^\]]+)\]/gi,"<div class='titre1'>$1. $2</div>");
    text = text.replace(/\[(\d+)\.(\d+)\s([^\]]+)\]/gi,"<div class='titre2'>$1.$2 $3</div>");
    return text;
}
function insertListing(text) {
    text = text.replace(/\t\+\s(.+)\n/g,"<ul><li class='listing'>$1</li></ul>\n");
    return text;
}
function insertCoding(text) {
	text = text.replaceAll("[code]","<div class='coding'>");
	text = text.replaceAll("[/code]","</div>");
	return text;
}

function insertImg(text) {
    text = text.replace(/\[img src=([^\]]+)\]\n/gi,"<img src='$1'>");
    return text;
}
conteneur.innerHTML = "";
ConteneurText = insertTitreDoc(ConteneurText);
ConteneurText = insertTitre(ConteneurText);
ConteneurText = insertListing(ConteneurText);
ConteneurText = insertCoding(ConteneurText);
ConteneurText = insertImg(ConteneurText);
ConteneurText = insertBR(ConteneurText);


conteneur.innerHTML = ConteneurText;