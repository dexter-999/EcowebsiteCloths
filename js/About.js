const MyParagraph = document.getElementById('paragraph1');
const MyParagraph2 = document.getElementById('paragraph2');


let count = 0;
let counter = 100;


let count2 = 0;
let counter2 = 160;

setInterval(function () {
    if (count <= counter) {
        MyParagraph.textContent = count;
        count++;
    }
}, 10)

setInterval(function () {
    if (count2 <= counter2) {
        MyParagraph2.textContent = count2;
        count2++;
    }
}, 8    )