"use strict";

window.onload = function () {
    // 
    let convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = convertBtnClicked;

}

function convertBtnClicked() {
    // Calls for temperature from Celsius field
    const celsiusField = document.getElementById("celsius");
    let celsius = Number(celsiusField.value);

    // Converts Farenheit to celsius
    let answer = (32 + (celsius * 9/5)).toFixed(0);

    // displays the result in <p id=farenheit
    const farenheitField = document.getElementById("farenheit");
    farenheitField.value = answer;
}