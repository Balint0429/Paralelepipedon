/*
* File: app.js
* Author: Laczkó Bálint
* Copyright: 2023, Laczkó Bálint
* Group: Szoft I-2-N
* Date: 2021-02-23
* Github: https://github.com/Balint0429/
* Licenc: GNU GPL
*/
var aoldalInput = document.querySelector('#Aoldal');
var boldalInput = document.querySelector('#Boldal');
var coldalInput = document.querySelector('#Coldal');
var calcButton = document.querySelector('#calcButton');
var terfogatInput = document.querySelector('#terfogat');

calcButton.addEventListener('click', () => {
    inputCon();
});

function inputCon() {
    let aoldal = Number(aoldalInput.value);    
    let boldal = Number(boldalInput.value);    
    let coldal = Number(coldalInput.value);
    let terfogat = calcTerfogat(aoldal,boldal,coldal);
    terfogatInput.value = " " + terfogat +"perc"; 

}

function calcTerfogat(aoldal,boldal,coldal) {
    return aoldal/boldal;
}