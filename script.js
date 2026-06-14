const reasons = [
"Eu amo o jeito que você consegue me fazer sorrir até nos dias mais difíceis.",
"Eu amo a sensação de segurança que sinto ao seu lado.",
"Eu amo você porque estar ao seu lado me faz sentir em casa.",
"Eu amo você porque me inspira a ser uma pessoa melhor.",
"Eu amo você porque todos os dias encontro uma nova razão para continuar te amando."
];

let currentReason = 0;

const openBtn = document.getElementById("open-letter");
const nextBtn = document.getElementById("next-reason");
const reasonText = document.getElementById("reason-text");

const container = document.querySelector(".left-side");
const letterContainer = document.getElementById("letter-container");

const music = document.getElementById("bg-music");
const volumeControl = document.getElementById("volume-control");

// Efeito de digitação
function typeWriter(text, element, speed = 35) {
element.innerHTML = "";
let i = 0;

nextBtn.disabled = true;

function typing() {
if (i < text.length) {
element.innerHTML += text.charAt(i);
i++;
setTimeout(typing, speed);
} else {
nextBtn.disabled = false;
}
}

typing();
}

// Abrir carta
openBtn.addEventListener("click", () => {

console.log("CLIQUEI");

if (container) {
container.style.display = "none";
}

letterContainer.classList.remove("hidden");
letterContainer.style.display = "flex";

if (music) {
music.volume = 0.5;
music.play().catch(() => {});
}

typeWriter(reasons[currentReason], reasonText);
});

// Próximo motivo
nextBtn.addEventListener("click", () => {

currentReason++;

if (currentReason < reasons.length) {

typeWriter(reasons[currentReason], reasonText);

} else {

nextBtn.style.display = "none";

const finalMessage = `❤️

E mesmo depois de todas essas palavras, ainda sinto que nenhuma delas consegue mostrar o tamanho da paixão que sinto por você.

Sou completamente apaixonada e obcecada por você, meu amor.

E se eu tivesse mais 300 motivos para escrever, ainda não seriam suficientes para explicar tudo o que sinto quando penso em você.

Eu te amo. ❤️

Com todo o meu amor,

Gabrielly ❤️ 

obs.: FEliz dia dos namorados atrasado kkkk` ;

typeWriter(finalMessage, reasonText, 25);

}
});

// Controle de volume
if (volumeControl && music) {
volumeControl.addEventListener("input", () => {
music.volume = volumeControl.value;
});
}

const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 120; i++) {
  const star = document.createElement("span");

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDuration = (2 + Math.random() * 5) + "s";
  star.style.opacity = Math.random();

  starsContainer.appendChild(star);
}