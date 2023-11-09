let speech = new SpeechSynthesisUtterance();
let voices = [
    { name: 'Default Voice', lang: 'en-US' },
    { name: 'German', lang: 'de-DE' },
    { name: 'United States English', lang: 'en-US' },
    { name: 'UK English', lang: 'en-GB' },
    { name: 'Russian', lang: 'ru-RU' },
    { name: 'Spanish', lang: 'es-ES' },
    { name: 'French', lang: 'fr-FR' },
    { name: 'Chinese (Mandarin)', lang: 'zh-CN' },
    { name: 'Japanese', lang: 'ja-JP' },
    { name: 'Arabic', lang: 'ar-SA' },
    { name: 'Portuguese', lang: 'pt-PT' },
    { name: 'Italian', lang: 'it-IT' },
    { name: 'Hindi', lang: 'hi-IN' },
    { name: 'Korean', lang: 'ko-KR' },
    { name: 'Dutch', lang: 'nl-NL' },
    { name: 'Swedish', lang: 'sv-SE' }
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
