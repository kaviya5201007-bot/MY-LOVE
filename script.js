const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "LOVE❤️";
const fontSize = 18;
const columns = Math.floor(canvas.width / fontSize);

const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
}

function drawMatrix() {

    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff4fa3";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const text = letters[Math.floor(Math.random() * letters.length)];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
            drops[i] = 0;
        }

        drops[i]++;
    }

}

setInterval(drawMatrix, 35);

const center = document.getElementById("centerText");

const words = [
    "YOU",
    "ARE",
    "MY",
    "LOVE ❤️"
];

let index = 0;

function showWord() {

    if (index < words.length) {

        center.innerHTML = words[index];

        center.style.opacity = "1";

        setTimeout(() => {

            center.style.opacity = "0";

        }, 1000);

        index++;

        setTimeout(showWord, 2000);

    } else {

        document.getElementById("heartContainer").style.display = "flex";

    }

}

setTimeout(showWord, 1000);

window.onresize = function () {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

};