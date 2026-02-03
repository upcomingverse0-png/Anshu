const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");

// NAME FROM URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if (name) {
  question.innerText = `${name}, will you be my Valentine?`;
}

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES CLICK – ALL MESSAGES
yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";

  const messages = [
    "🥰 Hehe… mujhe pata tha tum hamesha YES hi kahogi ❤️",

    "💞 Tum sirf meri Valentine nahi ho…",

    "🌍 Tum meri har khushi, har sukoon aur har dua ho",

    "🥹 Tumhare saath zindagi aur bhi khoobsurat lagti hai",

    "❤️ I’m really lucky to have you",

    "🌹my love 🌹"

    "💖 Happy Valentine In Advance 
                  Meri Jaan Anshu💖"
  ];

  let index = 0;
  question.innerHTML = messages[index];

  const interval = setInterval(() => {
    index++;
    if (index < messages.length) {
      question.innerHTML = messages[index];
    } else {
      clearInterval(interval);
    }
  }, 2000); // har 2 second me message change
});