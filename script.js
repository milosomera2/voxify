const voicesDropdown = document.querySelector("select");
const textarea = document.querySelector("#text");
const rate = document.querySelector("#rate");
const pitch = document.querySelector("#pitch");
const stopButton = document.querySelector("#stop-button");
const speakButton = document.querySelector("#speak-button");

const message = new SpeechSynthesisUtterance(textarea.value);
let voices = [];

function populateVoicesDropdown() {
  voices = speechSynthesis.getVoices();

  for(let index = 0; index < voices.length; index++) {
    const option = document.createElement("option");
    option.setAttribute("value", voices[index].name);
    option.textContent = voices[index].name;

    voicesDropdown.appendChild(option);
  }
}

function setVoice() {
  for(let index = 0; index < voices.length; index++) {
    if(voicesDropdown.value === voices[index].name) {
      message.voice = voices[index]
    }
  }
}

function setRate() {
  message.rate = rate.value;
}

function setPitch() {
  message.pitch = pitch.value;
}

function setText() {
  message.text = textarea.value;
}

function speakVoice() {
  speechSynthesis.speak(message)
}

function stopVoice() {
  speechSynthesis.cancel();
}

speechSynthesis.addEventListener("voiceschanged", populateVoicesDropdown);
voicesDropdown.addEventListener("change", setVoice);
rate.addEventListener("change", setRate);
pitch.addEventListener("change", setPitch);
textarea.addEventListener("change", setText);
stopButton.addEventListener("click", stopVoice);
speakButton.addEventListener("click", speakVoice);