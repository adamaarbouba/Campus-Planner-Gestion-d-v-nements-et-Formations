let score = 0;
let Tentatives = 5;

const inputfound = document.getElementById("found");
const scoreDisplay = document.getElementById("score");
const Ten = document.getElementById("Tentatives");
const buttons = document.querySelectorAll(".btn");

const words = ["html", "ibangris", "ilyas"];
let currentWord = "";
let foundWord = [];


function channge() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    foundWord = Array(currentWord.length).fill("_");
    inputfound.value = foundWord.join(" ");
    buttons.forEach(btn => btn.disabled = false);
    Ten.innerHTML = Tentatives;
}

function checkLetter(btn) {
    btn.disabled = true;
    let correct = false;

    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === btn.textContent) {
            foundWord[i] = btn.textContent;
            correct = true;
        }
    }

    inputfound.value = foundWord.join(" ");

    if (correct) {
        score += 10;
        scoreDisplay.innerHTML = score;
    } else {
        Ten.innerHTML = --Tentatives;
        if (Tentatives === 0) {
            scoreDisplay.innerHTML = `<h2>Game Over</h2>`;
            buttons.forEach(btn => btn.disabled = true);    
        }
    }
    if (foundWord.join("") === currentWord) {
        Ten.innerHTML = `<h2>Bravoo! Keep going</h2>`;
        setTimeout(channge, 2000);
    }
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        checkLetter(btn);
    });
});

channge();
