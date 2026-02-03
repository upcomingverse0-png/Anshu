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
yesBtn.addEventListener("click", () => {
  music.play().catch(()=>{});
  document.body.classList.add("night","reel");
  document.querySelector(".buttons").style.display = "none";

  launchConfetti();
  popHearts();

  const messages = [
    "🥰 Hehe… mujhe pata tha tum hamesha YES hi kahogi ❤️",
    "💞 Tum sirf meri Valentine nahi ho…",
    "🌍 Tum meri zindagi ka sabse khoobsurat hissa ho",
    "🥹 Tumhare saath har din special lagta hai",
    "❤️ I’m really lucky to have you",
    "💍 Forever Together<br><br>Always you. Always us. ❤️"
  ];

  let i = 0;
  question.innerHTML = messages[i];

  const interval = setInterval(() => {
    i++;
    if (i < messages.length) {
      question.innerHTML = messages[i];
    } else {
      clearInterval(interval);
      document.getElementById("shotBtn").style.display="block";
    }
  }, 2200);
});

// CONFETTI
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

// HEARTS
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

// PASSWORD
function unlock(){
  const pass = document.getElementById("pwd").value;
  if(pass === "you"){   // ← password yahin change karo
    document.getElementById("lock").style.display="none";
  } else {
    document.getElementById("err").style.display="block";
  }
}

// Screenshot
const shotBtn = document.createElement("button");
shotBtn.id = "shotBtn";
shotBtn.innerText = "📸 Save Memory";
document.body.appendChild(shotBtn);
shotBtn.onclick = () => window.print();
