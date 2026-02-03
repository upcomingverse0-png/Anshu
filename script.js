document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const question = document.getElementById("question");
  const songFrame = document.getElementById("loveSong");

  // Safety check
  if (!yesBtn || !noBtn || !question) {
    alert("Button ID mismatch");
    return;
  }

  // NO button – cute reply
  noBtn.addEventListener("click", () => {
    question.innerHTML =
      "🥺 Aise NO mat bolo na…<br><br>tum meri favourite ho ❤️";
  });

  // YES button – WORKING CONFIRM
  yesBtn.addEventListener("click", () => {
    // hide buttons
    document.querySelector(".buttons").style.display = "none";

    // play song (Half Girlfriend – Tu Hi Hai)
    if (songFrame) {
      songFrame.src =
        "https://www.youtube.com/embed/9yR0t2N6wRQ?autoplay=1&loop=1&playlist=9yR0t2N6wRQ";
    }

    // messages
    const messages = [
      "🥰 Hehe… mujhe pata tha tum YES hi kahogi ❤️",
      "💞 Tum sirf meri Valentine nahi ho…",
      "🌍 Tum meri zindagi ka sabse khoobsurat hissa ho",
      "🥹 Tumhare saath har din special lagta hai",
      "❤️ I’m really lucky to have you",
      "🌹 Happy Valentine, meri jaan Anshu 🌹"
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
});
