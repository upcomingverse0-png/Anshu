const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const music = document.getElementById("loveMusic");

// Name from URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if (name) {
  question.innerText = `${name}, will you be my Valentine? ❤️`;
}

// NO button – cute response
noBtn.addEventListener("click", () => {
  question.innerHTML =
    "🥺 Aise NO mat bolo na…<br><br>tum meri favourite ho ❤️";
});

// YES button – full magic
yesBtn.addEventListener("click", () => {document.getElementById("loveSong").src =
  "https://www.youtube.com/embed/9yR0t2N6wRQ?autoplay=1&loop=1&playlist=9yR0t2N6wRQ";
  // music
  music.play().catch(() => {});

  // night + reel mode
  document.body.classList.add("night", "reel");

  // hide buttons
  document.querySelector(".buttons").style.display = "none";

  // confetti + hearts
  launchConfetti();
  popHearts();

  const messages = [
    "🥰 Hehe… mujhe pata tha tum hamesha YES hi kahogi ❤️",
    "💞 Tum sirf meri Valentine nahi ho…",
    "🌍 Tum meri zindagi ka sabse khoobsurat hissa ho",
    "🥹 Tumhare saath har din special lagta hai",
    "❤️ I’m really lucky to have you",
    "🌹 Happy Valentine, my love 🌹"
  ];

  let i = 0;
  question.innerHTML = messages[i];

  const interval = setInterval(() => {
    i++;
    if (i < messages.length) {
      question.innerHTML = messages[i];
    } else {
      clearInterval(interval);
    }
  }, 2200);
});

// helpers
function launchConfetti() {
  const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#4cc9f0"];
  for (let i = 0; i < 40; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3500);
  }
}

function popHearts() {
  for (let i = 0; i < 8; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = "💖";
    h.style.left = 20 + Math.random() * 60 + "vw";
    h.style.bottom = "120px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }
}
