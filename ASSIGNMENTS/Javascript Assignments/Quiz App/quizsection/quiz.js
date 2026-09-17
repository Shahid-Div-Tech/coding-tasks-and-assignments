let timer = document.querySelector("#timer");

let count = 0;

let starttimer = setInterval(() => {
  count += 1;
  timer.innerHTML = "00 :" + count;
  if (count >= 10) {
    buttonchose.forEach((value) => {
      if (value.id === "four") {
         let speech = new SpeechSynthesisUtterance("Time out");
        speech.lang = "en-US";
        speech.rate = 1;
        speechSynthesis.speak(speech);
        value.style.border = "2px solid green";
       

        buttonchose.forEach((btn) => {
          btn.disabled = true;
        });
      }
    });

    clearInterval(starttimer);
  }
}, 1000);

let buttonchose = document.querySelectorAll(".btn");

buttonchose.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "four") {
      btn.style.border = "3px solid green";
      let speech = new SpeechSynthesisUtterance("Waooo good luck");
      speech.lang = "en-US";
      speech.rate = 1;
      speechSynthesis.speak(speech);
    } else {
      btn.style.border = "3px solid red";
      buttonchose.forEach((item) => {
        if (item.id === "four") {
          item.style.border = "3px solid green";
        }
      });

      let speech = new SpeechSynthesisUtterance("Wrong answer");
      speech.lang = "en-US";
      speech.rate = 1;
      speechSynthesis.speak(speech);
    }

    clearInterval(starttimer);

    buttonchose.forEach((btn) => {
      btn.disabled = true;
    });
  });
});
