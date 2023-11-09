let speech = new SpeechSynthesisUtterance();
let voices = [
    { name: 'United States English', lang: 'en-US' }
];

let voiceSelect = document.querySelector("select");

voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));

voiceSelect.addEventListener("change", () => {
    speech.voice = new SpeechSynthesisVoice(voices[voiceSelect.value]);
});

document.querySelector("button").addEventListener("click" , ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
