const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");

// NAME FROM URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if (name) {
  question.innerText = `${name}, Anshu Ji ❤️ will you be my Valentine? ❤️`;
}

// NO button runs away
// NO button behaviour
noBtn.addEventListener("click", () => {
  question.innerHTML = "🥺 Aise NO mat bolo na…<br>tum meri favourite ho ❤️";
});

// YES CLICK – GF SPECIAL FLOW
yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";

  const messages = [
    "🥰 Hehe… mujhe pata tha tum hamesha YES hi kahogi ❤️",
    "💞 Tum sirf meri Valentine nahi ho…",
    "🌍 Tum meri har khushi, har sukoon aur har dua ho",
    "🥹 Tumhare saath zindagi aur bhi khoobsurat lagti hai",
    "❤️ I’m really lucky to have you",
    "🌹 Happy Valentine in advance, meri jaan Anshu 🌹"
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
  }, 2000);
});
