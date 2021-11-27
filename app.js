const btn = document.querySelector(".speak");
const content = document.querySelector(".content");

const greetings = [
    "Thanks for asking. I'm Doing well",

    "Things are good. i just had my second covid-19 shot",

    "Am Going good, Big thanks to DamDev For making me part of this world",

    "i'm looking forward to the end of pandemic",
    "it has been a rough week",
];

const DamDev = [
    "my creator is DamDev, His a nice person but sometimes annoying, cus his always sad about is reaction to the past, his looking forward to be a better person in the future",

    "my creator is DamDev, A junior web developer, is a gentle and a hard working boy, his also in love with a class mate which her name is mariam, is the girl he always thing about everyDay, i prayed both of them last long forever,",

    "DamDev is my creator he has three rules, 1. Don't lie to him, 2. Don't use him, 3. If you are tired of him leave him alone"
];


const quotes = [
    "The fool doth think he is wise, but the wise man knows himself to be a fool.",

    "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",

    "When someone loves you, the way they talk about you is different. You feel safe and comfortable.",

    "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.",
    "People act as if they don't love you but they does, people act as if they care about you, but they did not",

    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",

    "I must not fear. Fear is the mind killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain."

]

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition;

recognition.onstart = function(){
    console.log("Activited voice recognition")
}

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutload(transcript)
}

btn.addEventListener("click", () =>{
    recognition.start();
});



function readOutload(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I don't know what you are saying";

    if(message.includes("how are you doing")){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes("who is your creator")){
        const finalText = DamDev[Math.floor(Math.random() * DamDev.length)];
        speech.text = finalText;
    }

    if(message.includes("tell me something")){
        const finalText = quotes[Math.floor(Math.random() * quotes.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
    
}