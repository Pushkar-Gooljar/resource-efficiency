var questions = [
    "Do you reuse old items?",
    "Do you have your own vegetable garder?",
    "Do you make compost",
    "Do you buy only what you need?",
    "Do you spend your money wisely?",
    "Do you waste electricity or wo'er'?",
    "Never.Placeholder()",
    "Gonna.Placeholder()",
    "GiveYou.Placeholder()",
    "Up.Placeholder()"
]
const question = document.getElementById('question');
const next = document.getElementById('next');
const back = document.getElementById('back');
const current = document.getElementById('question-id');
const progressBar = document.getElementById('progress-value')

var answer = null;
var score = 0;
var questionID = 0;
var dict = {};

// Changes question number
current.innerText = "Question " + (questionID + 1) + " of 10";

// Changes question
question.innerText = questions[questionID ];

document.getElementsByName("rad").forEach(radio => {
    if (radio.value == dict[questionID]) {
        radio.checked = true;
    };
});




question.innerText = questions[questionID];
function nextQuestion() {
    // gets answer
    document.getElementsByName("ans").forEach(radio => {
        if (radio.checked) {
            answer = radio.value
            radio.checked = false;
        }
    })

    // proceeds if answer is given
    if (answer != null) {
        // adds points accordingly
        switch (answer) {
            case "yes":
                score += 10;
                break;
            case "no":
                score += 0;
                break;
            case "sometimes":
                score += 5;
        }

        // set record
        dict[questionID] = answer;

        // increases questionID
        questionID += 1;

        // Changes question number
        current.innerText = "Question " + (questionID + 1) + " of 10";

        // Changes question
        question.innerText = questions[questionID];

        progressBar.style.width = ('--progress-percent', ((questionID + 1) * 10) + "%");

        // resets answer variable
        answer = null;
    };


};

function previousQuestion() {
    // goes back is id is greater than zero
    if (questionID > 0) {
        // decreases questionID
        questionID -= 1;

        // changes current question and question
        question.innerText = questions[questionID];
        current.innerText = "Question " + (questionID + 1) + " of 10";

        // sets radio value according to records
        document.getElementsByName("ans").forEach(radio => {
            if (radio.value == dict[questionID]) {
                radio.checked = true;
            };
        });
    };

};


function n () {
    if (questionID < 9) {
        nextQuestion()
    } else {
        document.getElementsByName("ans").forEach(radio => {
            if (radio.checked) {
                answer = radio.value
                radio.checked = false;
            }
        })
    
        // proceeds if answer is given
        if (answer != null) {
            // adds points accordingly
            switch (answer) {
                case "yes":
                    score += 10;
                    break;
                case "no":
                    score += 0;
                    break;
                case "sometimes":
                    score += 5;
            }
        sessionStorage.setItem("score", score);
        window.location.href = "/resource-efficiency/results/";

    }

}
}


next.addEventListener("click", n);
back.addEventListener("click", previousQuestion);