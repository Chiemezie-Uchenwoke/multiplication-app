// Declare Variables
let clicks = 0;
const maxAttempts = 10;
const reloadButton = document.getElementById("reload");
reloadButton.style.display = "none";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

let countScore = 0; // Keep track of the score globally
const submit = document.getElementById("submit");
const scoreDisplay = document.getElementById("score");
const clicksDisplay = document.getElementById("clicks");
const responseDisplay = document.getElementById("givresp");
const answerInput = document.getElementById("answer");

// End Game Logic
const endGame = () => {
    submit.style.display = "none";
    reloadButton.style.display = "block";
    document.getElementById("quest").innerHTML = "<p>Great Job! You've completed all the questions!</p>";
};

// Generate Random Numbers
const generateNumbers = () => {
    const maxNumber = 100;
    const minNumber = 11;

    const randomNumber1 = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    const randomNumber2 = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

    num1.textContent = randomNumber1;
    num2.textContent = randomNumber2;
};

// Initialize Numbers
generateNumbers();

// Submit Answer Logic
const submitAnswer = () => {
    const answer = Number(answerInput.value);

    if (isNaN(answer)) {
        responseDisplay.textContent = "Please enter a valid number.";
        return;
    }

    // Check Answer
    if (Number(num1.textContent) * Number(num2.textContent) === answer) {
        countScore++;
        responseDisplay.textContent = "Correct!";
    } else {
        responseDisplay.textContent = `Wrong! Answer is ${Number(num1.textContent) * Number(num2.textContent)}`;
    }

    // Update Score and Clicks
    scoreDisplay.textContent = countScore;
    clicks++;
    clicksDisplay.textContent = clicks;

    // Clear Input and Response After Delay
    answerInput.value = "";
    setTimeout(() => {
        responseDisplay.textContent = "";
    }, 2000);

    // Generate New Numbers
    generateNumbers();

    // Check Game End
    if (clicks === maxAttempts){
        endGame();
    }
};

// Event Listener for Submit
submit.addEventListener("click", submitAnswer);

reloadButton.addEventListener("click", () => {
    location.reload();
});