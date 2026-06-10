"use strict";

window.addEventListener(
    "DOMContentLoaded",
    function () {
        setTimeout(function () {
            let popMessage = "いらっしゃい! おみくじ引いてって";
            window.alert(popMessage);
        }, 3000);
    },
    false
);

const btn = document.getElementById("btn");
const omikujiText = document.getElementById("omikujiText");

btn.addEventListener(
    "click",
    function () {
        let n = Math.floor(Math.random() * 3);

        switch (n) {
            case 0:
                omikujiText.textContent = "Very Happy!!!";
                omikujiText.style.color = "red";
                omikujiText.style.fontSize = "38px";
                break;

            case 1:
                omikujiText.textContent = "HAPPY";
                omikujiText.style.color = "yellow";
                omikujiText.style.fontSize = "30px";
                break;

            case 2:
                omikujiText.textContent = "UNHAPPY";
                omikujiText.style.color = "black";
                omikujiText.style.fontSize = "20px";
                break;
        }
    },
    false
);