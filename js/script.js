//array di oggetti

const arrImages = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morales",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

//creazione delle varibili collegate 
const eleleftSlider = document.querySelector(".left-slider") //parte sinistra

const elerightSlider = document.querySelector(".right-slider") //parte destra

const eleTitle = document.querySelector(".title") //titolo

const eleText = document.querySelector(".text") //testo

eleTitle.innerHTML = arrImages[0].title 

eleText.innerHTML = arrImages[0].text


// slider di sinistra
for (i = 0; i < arrImages.length; i++) {
	//creazione variabili img
    let eleImgGrande = document.createElement("img")
    eleImgGrande.src = `img/${arrImages[i].image}`
    eleImgGrande.classList.add('left-slider-img')
	//condizioni del cambio immagini
    if(i === 0){
        eleImgGrande.classList.add('active')
    }
    eleleftSlider.append(eleImgGrande)
}


// slider di destra delle immagini piccole
for (i = 0; i < arrImages.length; i++) {
	//crazioni variabili piccole
    let eleImgGrande = document.createElement("img")
    eleImgGrande.src = `img/${arrImages[i].image}`;
	eleImgGrande.classList.add('right-slider-img')
	//condizioni per le immagini piccole
    if(i === 0){
        eleImgGrande.classList.add('selected')
    }
    elerightSlider.append(eleImgGrande)
}



//variabili per i bottoni
let immagineAttiva = 0;

let eleupButton = document.getElementById("up-button");

let eledownButton = document.getElementById("down-button");

let elelistLeftImg = document.querySelectorAll('.left-slider-img');

let elelistRightImg = document.querySelectorAll('.right-slider-img');




// funzione 
function disattiva() {
    elelistLeftImg[immagineAttiva].classList.remove('active');
    elelistRightImg[immagineAttiva].classList.remove('selected');

    if(immagineAttiva === 0){
        immagineAttiva = arrImages.length;
    }

    immagineAttiva--;

    elelistLeftImg[immagineAttiva].classList.add('active');
    elelistRightImg[immagineAttiva].classList.add('selected');
	eleTitle.innerHTML = arrImages[immagineAttiva].title;
    eleText.innerHTML = arrImages[immagineAttiva].text;
}


//funzione
function attiva() {
    elelistLeftImg[immagineAttiva].classList.remove('active');
    elelistRightImg[immagineAttiva].classList.remove('selected');
    
    immagineAttiva++;

    if(immagineAttiva === (arrImages.length)){
        immagineAttiva = 0;
    }

    elelistLeftImg[immagineAttiva].classList.add('active');
    elelistRightImg[immagineAttiva].classList.add('selected');
    eleTitle.innerHTML = arrImages[immagineAttiva].title;
	eleText.innerHTML = arrImages[immagineAttiva].text;
}



// richiamo delle funzioni per i bottoni 
eledownButton.addEventListener('click', function(){
    attiva();
});

//richiamo delle funzioni per i bottoni
eleupButton.addEventListener('click', function(){
    disattiva();
});

