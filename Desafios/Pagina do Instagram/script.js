
function slide1(){
document.getElementById('troca-img').src="./img/img-celphone1.png";
setTimeout("slide2()", 5000);
}

function slide2(){
document.getElementById('troca-img').src="./img/img-celphone2.png"
setTimeout("slide3()", 5000);
}

function slide3(){
document.getElementById('troca-img').src="./img/img-celphone3.png";
setTimeout("slide4()", 5000);
}

function slide4(){
document.getElementById('troca-img').src="./img/img-celphone4.png";
    setTimeout("slide1()", 5000);
}
