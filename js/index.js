const MyBtn = document.querySelector('.btnMksoda');
const MyTsawr1 = document.getElementById('SHOP1');
const MyTsawr2 = document.getElementById('SHOP2');
const MyTsawr3 = document.getElementById('SHOP3');
const MyTsawr4 = document.getElementById('SHOP4');
const Deleted = document.getElementById('del');

function thisImg(btn){
    MyTsawr1.textContent = btn.name ;
    btn.textContent = innerHTML="is send";
}

function TItle(text){
    MyH2.textContent = text;

};
Deleted.addEventListener('click',function(){
    this.remove()
    this.style.cursor= "Pointer";
})


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

