// Declare Variables
let clicks = 0;
// console.log(clicks.innerHTML);

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let countScore = 0 // Keep track of the score globally
let submit = document.getElementById("submit");

// Create Random Numbers
function generateNumbers(){
    let randomNumber1 = Math.random();
    randomNumber1 = randomNumber1 * 12;
    randomNumber1 = Math.floor(randomNumber1) + 1;

    let randomNumber2 = Math.random();
    randomNumber2 = randomNumber2 * 12;
    randomNumber2 = Math.floor(randomNumber2) + 1;

    // Redeclare num1 and num2
    num1.innerHTML = randomNumber1;
    num2.innerHTML = randomNumber2;
}
generateNumbers(); // Call the generateNumbers function to initialize

// condition for scoring
submit.addEventListener("click", submitAnswer);

function submitAnswer(){
    let answer = document.getElementById("answer").value;
    answer = Number(answer);
    // console.log(answer);

    let score = document.getElementById("score");
    let numberOfQuestionsAnswered = document.getElementById("clicks");

    if ((num1.innerHTML * num2.innerHTML) === answer){
        countScore++;
        console.log(countScore);
        score.innerHTML = countScore;
        // console.log(score.);
    }else{
        countScore = countScore + 0;
    }

    //To increase value of clicks when submit button is clicked
    clicks++;
    numberOfQuestionsAnswered.innerHTML = clicks;

    // After submitting, clear the input field
    document.getElementById("answer").value = '';

    // Generate new numbers for the next question
    generateNumbers();
}