window.addEventListener('load', init)

let time = 7;
let score = 0;
let isPlaying;

const currentWorld = document.querySelector('#current-word');
const worldInput = document.querySelector('#world-input');
const scoreResult = document.querySelector('#message');
const globalTime = document.getElementById('time');
const totalScore = document.querySelector('#score');


const words = [
 'afforest',
 'aftermath',
 'congratulatory',
 'eudaemonia',
 'happy',
 'featherd',
 'debonaire',
 'hotheaded',
 ' quantity',
 'pollyannaish',
 ' timber',
 'victory michael',
 ' wearisome',
 'accommodations',
 'additionally',
 'battlefield',
 'bankruptcy',
 'calculations',
 'calibration',
 'decorative',
 'experimental',
 'fellowship',
 'governmental',
 'harassment',
 'potentially',
 'volkswagen',
 'vulnerability',
 'infrastructure',
 'implementation',
 'depression',
 'decorative',
 'accountability',
];

//initilizing game

function init() {

// load word from array
 showWord(words);

//start matching on word input
worldInput.addEventListener('input', startMatch);

//countdown every seconds
setInterval(countdown, 1000);

//check game status
setInterval(checkStatus, 50);

}

//start match
function startMatch() {
if (matchWords()) {
  isPlaying = true;
  time = 6;
  showWord(words);
  worldInput.value = "";
  score++;
}
// if score is -1 display 0
if (score === -1) {
 scoreResult.innerHTML = 0;
} else {
totalScore.innerHTML = score;
 }
}

//match currentword to input
function matchWords(){
if (worldInput.value === currentWorld.innerHTML) {
scoreResult.innerHTML = "Correct!!";
return true;
} else {
scoreResult.innerHTML = "";
return false;
 }
}

//pick & show random world
function showWord(words) {
const randIndex = Math.floor(Math.random() * words.length);
//output random world
currentWorld.innerText = words[randIndex];
};


function countdown() {
 if (time > 0) {
    time--;
 } else if (time === 0) {
    isPlaying = false;
 }

 globalTime.innerHTML = time;
}

//check game status
function checkStatus() {
if (!isPlaying && time === 0 ) {
  scoreResult.innerText = 'Game Over!!';
  score = -1;
  }
}

