let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    if (voices.length > 0) {
        speech.voice = voices[0];

        voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
    }
};

voiceSelect.addEventListener("change", () => {
    if (voices.length > voiceSelect.value) {
        speech.voice = voices[voiceSelect.value];
    }
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
