var sliderArr = ['images/500x230_2-1.jpg','images/500x230-1.jpg','images/emek-kredit-1.jpg'];
var i=0;
var sliderBg = document.querySelector('.slider');
sliderBg.src = sliderArr[0];
function slider(){
	i++;
	if (i==sliderArr.length) {
		i=0
	}
	sliderBg.src = sliderArr[i];
}setInterval(slider,3000);

/*internet bank side*/
var zoomMain = document.querySelector('#main');
function close(btn){
	btn.style.display = 'none';
	zoomMain.setAttribute('class','');
}
function showDivs(divs){
	divs.style.display = 'block';
	zoomMain.setAttribute('class','zoom_out');
}
// document.body.addEventListener('click',function(divs){
// 	if (divs.style.display == 'block') {
// 		divs.style.display = 'none'
// 	}
// 	zoomMain.setAttribute('class','');
	
// })

var changeCapArr = ['Fərdi','Korporativ'];
var individualListArr =['Bank 24/7', 'Əmanətlər','Elektron xidmətlər','Cari hesab','Kreditlər','Ödəniş kartları','Köçürmələr','Kampaniyalar'];
var corporativeListArr=['Elektron bankçılıq', 'Sənədli əməliyyatlar','Ödəniş kartları','Hesablar','Biznes kreditləri','Əmanətlər','Köçürmələr','Bizimlə əlaqə'];

var hCaption = document.querySelector('.hCaption');
var hList = document.querySelector('.hList');

var middleSection = document.querySelector('.middleSection');
var individualBtn = document.querySelector('#individual');
var corporateBtn = document.querySelector('#corporative');
var changeBg = document.querySelector('#changeBg');
var overlay = document.createElement('div');
	overlay.setAttribute('class','sideOverlay');

var h2 = document.querySelector('.hTitle');
var hLink = document.querySelectorAll('.hLink');

individualBtn.addEventListener('click', function(){
	h2.innerHTML=changeCapArr[0];
	for (var x = 0; x<individualListArr.length;x++) {
	hLink[x].innerHTML = individualListArr[x];
	}

	changeBg.appendChild(overlay);
	changeBg.setAttribute('class','individualBg');
	individualBtn.setAttribute('class','active');
	corporateBtn.setAttribute('class','')
	setTimeout(function(){
	middleSection.style.top = '-200px';
	setTimeout(function(){
		middleSection.style.display = 'none';
	},50)
	},50)
})
corporateBtn.addEventListener('click', function(){

	h2.innerHTML=changeCapArr[1];
	for (var x = 0; x<corporativeListArr.length;x++) {
	hLink[x].innerHTML = corporativeListArr[x];
	}

	changeBg.appendChild(overlay);
	changeBg.setAttribute('class','corporateBg');
	corporateBtn.setAttribute('class','active');
	individualBtn.setAttribute('class','');
	setTimeout(function(){
	middleSection.style.top = '-200px';
	setTimeout(function(){
		middleSection.style.display = 'none';
	},50)
	},50)
})
