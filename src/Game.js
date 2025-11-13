let score = 0;
let Tentatives;

const hint = document.getElementById("hint")

const input = document.getElementById("input");
const scoreDisplay = document.getElementById("score");
const Tentative = document.getElementById("Tentatives");
const button = document.getElementById("Recomencer")
const buttons = document.querySelectorAll(".btn");

let foundWord = [];
if(localStorage.length == 0)
{
async function nice() {
    try {
        const response = await fetch('https://mocki.io/v1/f64d2ff5-72de-47ea-a59d-c8e8bfae08ef')
        const data = await response.json()
        localStorage.setItem("data_response", JSON.stringify(data) )
        console.log(data)
        return data
    } catch (error) {
        console.error("error fetching data")
    }
}
nice()
}
function channge() {
    let data = JSON.parse(localStorage.getItem('data_response'));
    console.log("dfghjkg");
    index = Math.floor(Math.random() * data.length )
    currentWord = data[index].word;
    hint.textContent = data[index].hint
    foundWord = Array(currentWord.length).fill("_");
    input.value = foundWord.join(" ");
    buttons.forEach(btn => btn.disabled = false);
     
    Tentatives = 5;
    button.innerHTML = " "
    if((localStorage.getItem('sc')).length != 0){
        score = JSON.parse(localStorage.getItem('sc'))
        scoreDisplay.innerHTML = score;
    }
    Tentative.innerHTML = Tentatives;
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

    input.value = foundWord.join(" ");
    if (correct) {
        score += 10;
        scoreDisplay.innerHTML = score
    } else {
        Tentative.innerHTML = --Tentatives;
        if (Tentatives === 0) {
            scoreDisplay.innerHTML = `<h2>Game Over</h2>`;
            button.innerHTML = `<button class="btn border-2 border-[#00a6c0] p-2" onClick="channge()">Recomencer</button>`
            buttons.forEach(btn => btn.disabled = true);
            score = 0
        localStorage.setItem('sc',score)
        }
    }
    if (foundWord.join("") === currentWord) {
        Tentative.innerHTML = `<h2>Bravoo! Keep going</h2>`;
        localStorage.setItem("sc", JSON.stringify(score))
        setTimeout(channge, 2000);
    }
}
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        checkLetter(btn);
    });
});
channge()