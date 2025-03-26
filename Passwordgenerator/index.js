const btn = document.getElementById('generate');
const newPass = document.getElementById('newPass');
const slider = document.getElementById('range');
const rangeValue = document.getElementById('rangeValue');
rangeValue.innerText = slider.value;
const capLet= document.getElementById('caplet');
const lowLet= document.getElementById('smalllet');
const numLet= document.getElementById('number');
const symLet= document.getElementById('special');
const copyBtn= document.getElementById('copyBtn');
slider.addEventListener('input', (e) => {
  rangeValue.innerText = e.target.value;
}
);
btn.addEventListener('click', () => {  
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*()_+{}[]:";\'<>?,./';
    let finalstr= '';
    let latestPass ='';
    if(capLet.checked){
        finalstr+=uppercase;
    }
    if(lowLet.checked){
        finalstr+=lowercase;
    }
    if(numLet.checked){
        finalstr+=numbers;
    }
    if(symLet.checked){
        finalstr+=symbols;
    }
    if(!capLet.checked && !lowLet.checked && !numLet.checked && !symLet.checked){
        alert('Please select atleast one option');
        return;
    }   
 
    
    for(let i=0; i<slider.value; i++){
        let randNum= Math.floor(Math.random()*finalstr.length);
        latestPass+=finalstr[randNum];
    }
    newPass.innerText=latestPass;
    
});
copyBtn.addEventListener('click', () => {
    window.navigator.clipboard.writeText(newPass.innerText);
    alert('Password copied to clipboard');
});