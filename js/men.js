const MyImg = document.querySelector('.productss');
const MyImgBtn = document.querySelector('imageP');
const MyH2 = document.getElementById('hh2');
const MyTsawr1 = document.getElementById('tsawr1');
const MyTsawr2 = document.getElementById('tsawr2');
const MyTsawr3 = document.getElementById('tsawr3');
const MyTsawr4 = document.getElementById('tsawr4');

function thisImg(immg,Name){
    MyImg.src = immg;
}

function TItle(text){
    MyH2.textContent = text;

}

MyTsawr1.addEventListener('click',()=>{
    TItle("VAIO Laptop 11gi7");
})

MyTsawr2.addEventListener('click',()=>{
    TItle("Mac Book 11gi9");
})

MyTsawr3.addEventListener('click',()=>{
    TItle("DELL Laptop 11gi5");
})

MyTsawr4.addEventListener('click',()=>{
    TItle("Iphone 13 128GO");
});

