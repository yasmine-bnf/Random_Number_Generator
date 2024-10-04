let button = document.getElementById('btn');
let randomNumber1 ;
let randomNumber2;
let randomNumber3;
const label1 = document.getElementById('lbl1');
const label2 = document.getElementById('lbl2');
const label3 = document.getElementById('lbl3');
const max =100;
const min =20;


button.onclick = function(){

    randomNumber1 = Math.floor(Math.random()* (max-min))+min+1;
    randomNumber2 = Math.floor(Math.random()* (max-min))+min+1;
    randomNumber3 = Math.floor(Math.random()* (max-min))+min+1;
    label1.textContent = randomNumber1;
    label2.textContent = randomNumber2;
    label3.textContent = randomNumber3;
}