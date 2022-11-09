//array di oggetti
const arrImages = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morales",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

// constani di collegamento html 
const eleImmagineCentrale = document.querySelector('.immmagine-centrale');
//bottoni
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');
// parte delle immagini a sinstra 
const eleImmaginiPiccole = document.querySelector('.immagini-piccole')


// RIFARE I DUE BOTTONI guardando il mio vecchio, riscrivere tutto

for (let i = 0; i < arrImages; i++) {
	//dichiarazione nuove variabili 
	let eleImg = document.createElement('img')
	eleImg.src = arrImages[i].image
	eleImg.classList.add('immagine-centrale-img')
	//ciclo che fa cambiare le immagini
	if (i === 0){
		eleImg.classList.add('active')
	}
	eleImmagineCentrale.append('eleImg')
}

//altre variabili 
let listEleImg = document.querySelectorAll('centrale-img')
let activeIndex = 0

//bottone di sinistra
eleBtnLeft.addEventListener('click', function (){
	//far scomparire
	listEleImg[activeIndex].classList.remove('active')
	//ciclo infinito
	if (activeIndex === arrImages.length - 1){
		activeIndex = 0
	} else {
		activeIndex++
	}

	listEleImg[activeIndex].classList.add('active')
	eleBtnRight.classList.remove('hidden')

	if (activeIndex === listEleImg.length + 1){
		eleBtnLeft.classList.add('hidden')
	}
})


// bottone destra 

eleBtnRight.addEventListener('click', function (){
	listEleImg[activeIndex].classList.remove('active')

	//ciclo infinito
	if (activeIndex === arrImages.length - 1){
		activeIndex = 0
	} else {
		activeIndex++
	}

	listEleImg[activeIndex].classList.add('active')
	eleBtnLeft.classList.remove('hidden')

	if (activeIndex === listEleImg.length + 1) {
		eleBtnRight.classList.add('hidden')
	}
})