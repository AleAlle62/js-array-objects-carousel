const arrImages = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
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

const eleSlider = document.querySelector('.slider');
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');
const eleSliderThumbs = document.querySelector('.thumbs')


for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
    //stampa immagine centrale
    eleImg.src = arrImages[i].image
    //stampa titolo e sottotilo dell'immagine primaria
    eleSliderThumbs.innerHTML += (`<h2 class=titolo>${arrImages[i].title}</h2> <p class=sottotitolo> ${arrImages[i].text}</p>
    `)    



	eleImg.classList.add('slider-img');
	if (i === 0) {
		eleImg.classList.add('active');
	}
	eleSlider.append(eleImg);

	//thumbs

	// const eleThumb = document.createElement('img');
	// eleThumb.src = arrImages[i];
	// eleThumb.classList.add('thumb-img');
	// if (i === 0) {
	// 	eleThumb.classList.add('active');
	// }
	// eleSliderThumbs.append(eleThumb);
}


const listEleImg = document.querySelectorAll('.slider-img');
// const listThumbs = document.querySelector('.thumb-img') 
let activeIndex = 0;


// BOTTONE SOTTO
eleBtnRight.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');
	// listThumbs[activeIndex].classList.remove('active');

    // ciclo infinto
    if (activeIndex === arrImages.length - 1){
        activeIndex = 0
    } else {
        activeIndex++
    }

	listEleImg[activeIndex].classList.add('active');
	// listThumbs[activeIndex].classList.add('active');

	eleBtnLeft.classList.remove('hidden');
	if (activeIndex === listEleImg.length + 1) {
		eleBtnRight.classList.add('hidden');
	}
});

// BOTTONE SOPRA 
eleBtnLeft.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');

    // ciclo infinto
    if (activeIndex === arrImages.length - 1){
        activeIndex = 0
    } else {
        activeIndex++
    }
	listEleImg[activeIndex].classList.add('active');

	eleBtnRight.classList.remove('hidden');
	if (activeIndex === listEleImg.length + 1) {
		eleBtnLeft.classList.add('hidden');
		// listThumbs[activeIndex].classList.add('active');
	}
});
