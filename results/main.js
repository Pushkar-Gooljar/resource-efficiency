const scoreH1 = document.getElementById('result-score-h1');
const scoreContainer = document.getElementById('score-box');
const progress = document.getElementById('progress-bar');
const greeting = document.getElementById('results-greeting');
const message = document.getElementById('results-message');

score = sessionStorage.getItem("score");
// score = 70;
scoreH1.innerText = score;

var per = score + "%";

document.documentElement.style.setProperty('--progress-percent', per);

if (score <= 25) {
    scoreContainer.setAttribute("style", "background: #ff4530;");
    greeting.innerText = "Meh 😒";
    message.innerHTML = `You scored ${score} efficiency points <br>You need to improve`;
}

else if (score > 25 && score <= 50) {
    scoreContainer.setAttribute("style", "background: #ff9500;");
    greeting.innerText = "Hmm 😐";
    message.innerHTML = `You scored ${score} efficiency points <br>You can do better`;

}

else if (score > 50 && score <= 75) {
    scoreContainer.setAttribute("style", "background: #ffcc00;");
    greeting.innerText = "Good 🙂";
    message.innerHTML = `You scored ${score} efficiency points <br>Good, but try to improve`;

}

else if (score > 75) {
    scoreContainer.setAttribute("style", "background: #30d158;");
    greeting.innerText = "Excellent 🎉";
    message.innerHTML = `You scored ${score} efficiency points <br>You are epic`;

};


