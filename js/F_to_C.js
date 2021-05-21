"use strict";

window.onload = function () {
    // 
    let convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = convertBtnClicked;

}

function convertBtnClicked() {
    // Calls for temperature from Farenheit field
    const farenheitField = document.getElementById("farenheit");
    let farenheit = Number(farenheitField.value);

    // Converts Farenheit to celsius
    let answer = ((5/9) * (farenheit - 32)).toFixed(0);

    // displays the result in <p id=celsius
    const celsiusField = document.getElementById("celsius");
    celsiusField.value = answer;
}