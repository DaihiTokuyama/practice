'use strict';

const btn = document.getElementById('btn');
const result = document.getElementById('result');
const picture=document.getElementById('picture')

btn.addEventListener('click', ()=> {
    let num = Math.random();

    if (num<0.2) {
        picture.src="img/IMG_9668.JPG" 
        result.textContent='イモムシ' 
    } else if (num<0.5) {
        picture.src="img/unknown.PNG" 
        result.textContent='お手'
    } else if (num<0.8) {
        picture.src="img/IMG_9667.JPG" 
        result.textContent='お尻預け'
    } else {
        picture.src="img/IMG_9669.JPG" 
        result.textContent='川下り'
    }
})