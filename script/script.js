var main = document.getElementById('main');
var placeholder = document.querySelector('#searchPlaceholder');
var trick = document.querySelector('.searchTrick');
var searchInput = document.getElementsByClassName('searchInput')[0];
var span = document.getElementsByClassName('exVal');

function newVal(val){
	searchInput.value = val.innerText;
}

searchInput.addEventListener('click',function(){
	trick.style.display = 'block';
	placeholder.setAttribute('class','focus')
})
// searchInput.addEventListener('blur',function(){
// 	trick.style.display = 'none';
// 	placeholder.setAttribute('class','')
// })




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
	setTimeout(function(){
		divs.style.display = 'none';
		setTimeout(function(){
			divs.style.right = "-50%";
		},50)
	},50)
	zoomMain.setAttribute('class','zoom_in');
	
	
	// btn.style.display = 'none';
	// zoomMain.setAttribute('class','');
	// changeBg.style.display ='none';
}
function showDivs(divs){
	setTimeout(function(){
		divs.style.display = 'block';
		setTimeout(function(){
			divs.style.right = 0;
		},50)
	},50)
	
	zoomMain.setAttribute('class','zoom_out');
}

// document.window.addEventListener('dblclick',function(divs){
// 	if (divs.style.display == 'block') {
// 		divs.style.display == 'none';
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
	 
	setTimeout(function(){
		middleSection.style.top = '-50vh';
	setTimeout(function(){
		middleSection.style.top = '-100vh';
	setTimeout(function(){
		middleSection.style.display = 'none';
	},50)
	},50)},50);
		setTimeout(function(){myFun()
			setTimeout(function(){
				h2.innerHTML=changeCapArr[0];
				for (var x = 0; x<individualListArr.length;x++) {
				hLink[x].innerHTML = individualListArr[x];
				}
				changeBg.appendChild(overlay);
				changeBg.setAttribute('class','individualBg');
				individualBtn.setAttribute('class','active');
				corporateBtn.setAttribute('class','');

			},30)
			},30)
	
})
function myFun(){

	var n = 'polygon(93% 0, 100% 0, 100% 100%, 95% 100%)';
	var m = 'polygon(89% 0, 100% 0, 100% 100%, 75% 100%)';
	var k = "polygon(75% 0, 100% 0, 100% 100%, 55% 100%)";
	var l = 'polygon(69% 0, 100% 0, 100% 100%, 25% 100%)';
	var d = 'polygon(65% 0, 100% 0, 100% 100%, 15% 100%)';
	
	setTimeout(function(){
		changeBg.style.clipPath = n;
		setTimeout(function(){
			changeBg.style.clipPath = m;
			setTimeout(function(){
				changeBg.style.clipPath = k;
				setTimeout(function(){
					changeBg.style.clipPath = l;
					setTimeout(function(){
						changeBg.style.clipPath = d;
					},100)
				},80)
			},60)
		},40)
	},20)
	changeBg.style.display = 'block';
}
corporateBtn.addEventListener('click', function(){
	setTimeout(myFun(),30)

	setTimeout(function(){
	middleSection.style.top = '-50vh';
	setTimeout(function(){
	middleSection.style.top = '-100vh';
	setTimeout(function(){
		middleSection.style.display = 'none';
	},50)
	},50)},50)

	h2.innerHTML=changeCapArr[1];
	for (var x = 0; x<corporativeListArr.length;x++) {
	hLink[x].innerHTML = corporativeListArr[x];
	}

	changeBg.appendChild(overlay);
	changeBg.setAttribute('class','corporateBg');
	corporateBtn.setAttribute('class','active');
	individualBtn.setAttribute('class','');
})
