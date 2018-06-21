var questions = [{

    question: "The Eiffel Tower is located where in Paris?",
    answer: ["Bois-de-Boulogne", "Champ-de-Mars", "Jardin-des-Plantes", "Parc-de-Belleville"],
    correct_index: 1
},
{
    question: "Which Apollo mission landed the first humans on the Moon?",
    answer: ["Apollo-7", "Apollo-9", "Apollo-11", "Apollo-13"],
    correct_index: 2
},
{
    question: "What is the International Air Transport Association airport code for Heathrow Airport?",
    answer: ["HRW", "HTR", "LHR", "LHW"],
    correct_index: 2
},
{
    question: "The reactor at the site of the Chernobyl nuclear disaster is now in which country?",
    answer: ["Ukraine", "Slovakia", "Hungary", "Russia"],
    correct_index: 0
},
{
    question: "Which volcano is best known for its eruption in AD 79 that led to the destruction of the Roman cities of Pompeii and Herculaneum?",
    answer: ["Mount-Etna", "Mount-Stromboli", "Mount-Vesuvius", "Mount-Vulture"],
    correct_index: 2
},
{
    question: "Which skyscraper in New York City stands at the intersection of Fifth Avenue and West 34th Street?",
    answer: ["Bank of America Tower", "Chrysler Building", "Empire State Building", "Trump World Tower"],
    correct_index: 2
},
{
    question: "Alcatraz Island, once the site of a notorious prison, is situated in which bay?",
    answer: ["Baffin Bay", "Galway Bay", "Hudson Bay", "San Francisco Bay"],
    correct_index: 3
},
{
    question: "In which century was the Taj Mahal built?",
    answer: ["16th", "17th", "18th", "19th"],
    correct_index: 1
}
]

var score = $("#score");
$("#score").hide();
var container = $("#question-container");
$("#question-container").hide();
var submit = $("#submit");
$("#submit").hide();

$(".startbutton").on("click", function () {
    $("#submit").show();
    $(".startbutton").hide();
    $("#question-container").show();
    var timer = $("#timer-container");
    startTimer(timer);
    for (var i = 0; i < questions.length; i++) {
        var question_selected = questions[i];
        var question_value = question_selected.question;
        var answer = question_selected.answer;
        var question_index = "questionNum" + i;
        var questiondiv = $('<div id="' + question_index + '">' + question_value + "</div>");
        container.append(questiondiv);
        var ansForm = $("<form></form>");
        questiondiv.append(ansForm);
        for (var a = 0; a < answer.length; a++) {
            var radioId = question_index + "radio" + a;
            var ansSelection = $('<div class ="radio"> <label class="radio-inline"><input type="radio" id="' + radioId + '" name="optradio">' + answer[a] + '</label></div>');
            ansForm.append(ansSelection);
        }  
    }
    $("#submit").on("click", function (){
        endGame();
    });
    setTimeout(endGame, 30000);


});

function startTimer(display) {
    var timer = 30;
    setInterval(function () {
        timer--;
        display.html(timer + "<br> TIME REMAINING");;
    }, 1000);
}

function endGame() {
    var correct_answer = 0;
    var incorrect_answer = 0;
    var noAns = 0;
    for (var i = 0; i < questions.length; i++) {
        var checkedRadioNum = 99;
        var question_index = "questionNum" + i;
        for (var y = 0; y < 4; y++) {
            var radioId = question_index + "radio" + y;
            var isChecked = $("#" + radioId).prop("checked");
            if (isChecked) {
                checkedRadioNum = y;
                break;
            }
        }
        if (checkedRadioNum === questions[i].correct_index) {
            correct_answer++;
        } else {
            incorrect_answer++;
        }

    }
    $("#submit").hide();
    $("#score").show();
    var results = $("<h1></h1>");
    score.append(results);
    $("#question-container").hide();
    $("#timer-container").hide();
    results.append("Correct: " + correct_answer);
    results.append("<br></br>");
    results.append("Incorrect: " + incorrect_answer);

}


















