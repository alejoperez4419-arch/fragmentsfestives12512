const sendBtn = document.getElementById('sendBtn');
const resendBtn = document.getElementById('resendBtn');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');

// Inputs
const coinsInput = document.getElementById('amountCoins');
const gpInput = document.getElementById('amountGP1');
const gemsInput = document.getElementById('amountGems');
const fragsInput = document.getElementById('amountFrags');

// Displays
const displayCoins = document.getElementById('displayCoins');
const displayGP = document.getElementById('displayGP');
const displayGems = document.getElementById('displayGems');
const displayFrags = document.getElementById('displayFrags');

// Boxes
const boxCoins = document.getElementById('boxCoins');
const boxGP = document.getElementById('boxGP');
const boxGems = document.getElementById('boxGems');
const boxFrags = document.getElementById('boxFrags');

const spinner = document.getElementById('spinner');

sendBtn.addEventListener('click', () => {

    const coins = coinsInput.value.trim();
    const gp = gpInput.value.trim();
    const gems = gemsInput.value.trim();
    const frags = fragsInput.value.trim();

    if (!coins && !gp && !gems && !frags) {
        alert("Please enter at least one amount!");
        return;
    }

    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";
    spinner.style.display = "block";

    setTimeout(() => {
        spinner.style.display = "none";
        section1.classList.remove("active");
        section2.classList.add("active");

        if (coins) {
            boxCoins.style.display = "block";
            displayCoins.textContent = coins;
        } else boxCoins.style.display = "none";

        if (gp) {
            boxGP.style.display = "block";
            displayGP.textContent = gp;
        } else boxGP.style.display = "none";

        if (gems) {
            boxGems.style.display = "block";
            displayGems.textContent = gems;
        } else boxGems.style.display = "none";

        if (frags) {
            boxFrags.style.display = "block";
            displayFrags.textContent = frags;
        } else boxFrags.style.display = "none";

        launchConfetti();

    }, 2000);
});

resendBtn.addEventListener('click', () => {
    section2.classList.remove("active");
    section1.classList.add("active");

    coinsInput.value = "";
    gpInput.value = "";
    gemsInput.value = "";
    fragsInput.value = "";

    sendBtn.textContent = "Send";
    sendBtn.disabled = false;

    clearEffects();
});

// Confetti
function launchConfetti() {
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.background = randomColor();
        confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

function randomColor() {
    const colors = ["#FFD700", "#FF5733", "#00FFCC", "#33FF57", "#3366FF", "#FF00FF"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function clearEffects() {
    document.querySelectorAll(".confetti").forEach(e => e.remove());
}
