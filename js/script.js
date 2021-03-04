let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
/*
	let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			thisLink.classList.toggle('borderBottom')
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}
*/


let menuItem = document.querySelectorAll('.menu__item');


for(let i = 0; i < menuItem.length; i++){
	let menu = menuItem[i];

//	menu.classList.add('_active');
	menu.addEventListener('click', function(){
		menu.classList.toggle('_active');
	})
}

let logo = document.querySelector('.header-top__logo');


logo.onclick = function(){
	if(logo.offsetWidth < 300){
		logo.style.maxWidth = '400px';
	}else{
		logo.style.maxWidth = '200px';
	}
}
//=================================================



// Slider_01 variables =================================================
//Box with Slider=================
let imageSlider = document.querySelectorAll('.images__box_01');

//Left arrow====================
const leftScroll = document.querySelector('.prev-elem_01');


//Right Arrow================
const rightScroll = document.querySelector('.next-elem_01');

// Slider_01 variables =================================================

// Slider_02 variables =================================================
//Box with Slider=================
let imageSlider_02 = document.querySelectorAll('.images__box_02');

//Left arrow====================
const leftScroll_02 = document.querySelector('.prev-elem_02');


//Right Arrow================
const rightScroll_02 = document.querySelector('.next-elem_02');

// Slider_02 variables =================================================


//Slide allows=========
let clickSlid = true;
//Slide allows==========


//Left slider movement Function===========================================
 function moveLeft( slider,readyBlock,moveBlock){
	clickSlid = false;
	for(let i = 0; i < slider.length; i++){
		let a;
		if(slider[i].className.match('_active')){
			a = i + 1;
			if(i == slider.length-1 ){
				a = 0;
			}
			slider[a].classList.add('_readyRight');
			slider[i].classList.remove('_active');
			slider[i].classList.add('_goLeft');
			setTimeout(changeClass,1000, slider[a], slider[a],'_active',readyBlock);
			setTimeout(removeClass,1000, slider[i], moveBlock);
			if(i == slider.length ){
				i = 0;
			}
			clickSlid = true;
			break;
		}
	}
}

//Left slider movement Function===========================================

function changeClass(add, remove,addClass,removeClass){
	remove.classList.remove(removeClass);
	add.classList.add(addClass);

}
function removeClass(remove, classRemove){
	remove.classList.remove(classRemove);

}

//Right slider movement  Function==========================================

 function moveRight(slider,readyBlock,moveBlock){
	clickSlid = false;
	for(let i = 0; i < slider.length; i++){
		let a;
		if(slider[i].className.match('_active')){
			a = i - 1;
			if(i == 0 ){
				a = slider.length-1;
			}
			slider[a].classList.add('_readyLeft');
			slider[i].classList.remove('_active');
			slider[i].classList.add('_goRight');
			setTimeout(changeClass,1000, slider[a], slider[a],'_active',readyBlock);
			setTimeout(removeClass,1000, slider[i], moveBlock);
			if(i == 0 ){
				i = imageSlider.length-1;
			}
			clickSlid = true;
			break;
		}
	}
} 
//Right slider movement  Function============================================

//Sliders initilization ================================

// Slider _01=============
if(clickSlid){
	leftScroll.onclick = function(){moveLeft( imageSlider,'_readyRight','_goLeft')};
}

if(clickSlid){
	rightScroll.onclick = function(){moveRight(imageSlider,'_readyLeft', '_goRight')};
}
// Slider _01=============

// Slider _02=============
if(clickSlid){
	leftScroll_02.onclick = function(){moveLeft( imageSlider_02,'_readyRight','_goLeft')};
}

if(clickSlid){
	rightScroll_02.onclick = function(){moveRight(imageSlider_02,'_readyLeft', '_goRight')};
}
// Slider _02=============

//Sliders initilization ================================


//PopUp================================================


let images = document.querySelectorAll('.image');
let popUp = document.querySelector('.popup');
let img = document.querySelector('.img');

popUp.onclick = function(){
	popUp.classList.toggle('_active');
}

for(let i = 0; i < images.length; i++){
	let bigImage = images[i];

	if(clickSlid){
		bigImage.addEventListener('click', function(){
			popUp.classList.toggle('_active');
			changeImage(bigImage.src);
		})
	}
}

function changeImage(image){
	let pop = document.getElementById('popUpImg');
	console.log(pop.src);
	pop.src = image;
}

//PopUp================================================


//Content_02========================================

//speed Divs appering
let animSpeed = 100;

//Number divs
let numDivs  = 50;

let toCentrDivs = (animSpeed * numDivs) + 1000;

let reduceDivs = toCentrDivs*2;


//Getting button==================
let startButt = document.querySelector('.wrapper__link');
//Getting button==================

let allowAnim = true;

//Start Animation================

startButt.onclick = function(){

		addDivs_02(0, numDivs);
		setTimeout(toCentr,toCentrDivs);
		setTimeout(delDivs,reduceDivs);
		
	
};
//Start Animation================


//Container for divs========
let container = document.querySelector('.divBox');
//Container for divs========





//Random numbers===============================
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
//Random numbers===============================


//Adding Active class============================
function makeActive(addDiv, addClass){
	addDiv.classList.add(addClass);
	let X = getRandomArbitrary(1, 3);
	let Y = getRandomArbitrary(1, 3);
	let text = 'scale'+'('+ X +','+Y+')'
	addDiv.style.transform = text;

}
//Adding Active class============================



/*
var d = document.getElementById('yourDivId');
d.style.position = "absolute";
d.style.left = x_pos+'px';
d.style.top = y_pos+'px';
*/
//Animation add Divs===============================
function addDivs_02( num, numMax){
	timerID = setInterval(function(){
		newDiv = document.createElement("div");
		container.appendChild(newDiv);
		newDiv.classList.add('newDiv');
		setTimeout(makeActive,1000, newDiv, '_activeDiv');
		num++;
		console.log(num);
		console.log(numMax);
		if(num >= numMax){
			console.log('numMax');
			clearInterval(timerID);
		}
	},animSpeed );
}
//Animation===============================


//Remove Divs========================

function toCentr(){
	let arrDivs = document.querySelectorAll('.newDiv');
	let i = arrDivs.length-1;
	if(arrDivs.length > 0){
		timer_02ID = setInterval(function(){
				
	//			arrDivs[i].remove();
				arrDivs[i].style.left = 50+'%';
				arrDivs[i].style.top = 50+'%';
				
			if(arrDivs.length === 0){
				clearInterval(timerID);
			}
			i--;
			if(i <=-1){
				clearInterval(timer_02ID);
			}
		},animSpeed );
	}
}
function delDivs(){
	let arrDivs = document.querySelectorAll('.newDiv');
	let i = arrDivs.length-1;
	if(arrDivs.length > 0){
		timer_03ID = setInterval(function(){
				
			arrDivs[i].remove();
				
			if(arrDivs.length === 0){
				clearInterval(timerID);
			}
			i--;
			if(i <=-1){
				clearInterval(timer_03ID);
			}
		},animSpeed );
	}
}

//Remove Divs========================


//Moves blocks;
activeTimerID = setInterval(function(){
	let activeArr = document.querySelectorAll('._activeDiv');
		if(activeArr.length>0){
			for(let i=0;i<activeArr.length;i++){
				 if (activeArr[i].classList.contains("_deActive") != true) { 
				 	activeArr[i].classList.add('_deActive');
					activeArr[i].style.left = getRandomArbitrary(0, 80)+'%';
					activeArr[i].style.top = getRandomArbitrary(0, 80)+'%';
				}
			}
		}
},animSpeed );


