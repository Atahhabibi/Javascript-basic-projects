
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn=document.getElementById('btn');
const color=document.querySelector('.color');
const body=document.querySelector('body');

btn.addEventListener('click',()=>{
    const Num1=getRandomNumber();
    const Num2=getRandomNumber();
    const Num3=getRandomNumber();
    const Num4=getRandomNumber();
    const Num5=getRandomNumber();
    const Num6=getRandomNumber();

    body.style.backgroundColor=`#${hex[Num1]}${hex[Num2]}${hex[Num3]}${hex[Num4]}${hex[Num5]}${hex[Num6]}`;
    color.textContent=`#${hex[Num1]}${hex[Num2]}${hex[Num3]}${hex[Num4]}${hex[Num5]}${hex[Num6]}`;
    

})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}