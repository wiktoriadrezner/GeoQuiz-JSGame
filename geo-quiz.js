/* Answer Key (Index in Array)
Country — Capital City — Flag — Famous Food - Population */
let answerKey = [
    /* (0) Azerbaijan */ {
        country: "Azerbaijan",
        capital: "Baku",
        flag: "🇦🇿",
        food: "Plov",
        population: "10.11 million",
    },
    /* (1) Australia */ {
        country: "Australia",
        capital: "Canberra",
        flag: "🇦🇺",
        food: "Vegemite",
        population: "25.69 million",
    },
    /* (2) Belarus */ {
        country: "Belarus",
        capital: "Minsk",
        flag: "🇧🇾",
        food: "Babka",
        population: "9.4 million",
    },
    /* (3) Bulgaria */ {
        country: "Bulgaria",
        capital: "Sofia",
        flag: "🇧🇬",
        food: "Kebatsche",
        population: "6.5 million",
    },
    /* (4) Canada */ {
        country: "Canada",
        capital: "Ottawa",
        flag: "🇨🇦",
        food: "Poutine",
        population: "38.01 million",
    },
    /* (5) Colombia */ {
        country: "Colombia",
        capital: "Bogotá",
        flag: "🇨🇴",
        food: "Ajiaco Santaferena",
        population: "50.88 million",
    },
    /* (6) Denmark */ {
        country: "Denmark",
        capital: "Copenhagen",
        flag: "🇩🇰",
        food: "Smørrebrød",
        population: "5.8 million",
    },
    /* (7) Ecuador */ {
        country: "Ecuador",
        capital: "Quito",
        flag: "🇪🇨",
        food: "Cuy Picante",
        population: "17.64 million",
    },
    /* (8) Finland */ {
        country: "Finland",
        capital: "Helsinki",
        flag: "🇫🇮",
        food: "Karjalanpiirakka",
        population: "5.5 million",
    },
    /* (9) Ghana */ {
        country: "Ghana",
        capital: "Accra",
        flag: "🇬🇭",
        food: "Fufu",
        population: "31.07 million",
    },
    /* (10) Iceland */ {
        country: "Iceland",
        capital: "Reykjavik",
        flag: "🇮🇸",
        food: "Skyr",
        population: "366 425",
    },
    /* (11) Kazakhstan */ {
        country: "Kazakhstan",
        capital: "Nur-Sultan",
        flag: "🇰🇿",
        food: "Beschbarmaq",
        population: "18.75 million",
    },
    /* (12) Lithuania */ {
        country: "Lithuania",
        capital: "Vilnius",
        flag: "🇱🇹",
        food: "Cepelinai",
        population: "2.7 million",
    },
    /* (13) Moldova */ {
        country: "Moldova",
        capital: "Chișinău",
        flag: "🇲🇩",
        food: "Mamaliga",
        population: "2.6 million",
    },
    /* (14) Pakistan */ {
        country: "Pakistan",
        capital: "Islamabad",
        flag: "🇵🇰",
        food: "Nihari",
        population: "220.9 million",
    },
];

/* Banks of Answers */
let bankCapital = [
    "Baku",
    "Canberra",
    "Minsk",
    "Sofia",
    "Ottawa",
    "Bogotá",
    "Copenhagen",
    "Quito",
    "Helsinki",
    "Accra",
    "Reykjavik",
    "Nur-Sultan",
    "Vilnius",
    "Chișinău",
    "Islamabad",
];
let bankFlag = ["🇦🇿", "🇦🇺", "🇧🇾", "🇧🇬", "🇨🇦", "🇨🇴", "🇩🇰", "🇪🇨", "🇫🇮", "🇬🇭", "🇮🇸", "🇰🇿", "🇱🇹", "🇲🇩", "🇵🇰"];
let bankFood = [
    "Plov",
    "Vegemite",
    "Babka",
    "Kebatsche",
    "Poutine",
    "Ajiaco Santaferena",
    "Smørrebrød",
    "Cuy Picante",
    "Karjalanpiirakka",
    "Fufu",
    "Skyr",
    "Beschbarmaq",
    "Cepelinai",
    "Mamaliga",
    "Nihari",
];
let bankPopulation = [
    "10.11 million",
    "25.69 million",
    "9.4 million",
    "6.5 million",
    "38.01 million",
    "50.88 million",
    "5.8 million",
    "17.64 million",
    "5.5 million",
    "31.07 million",
    "366 425",
    "18.75 million",
    "2.7 million",
    "2.6 million",
    "220.9 million",
];

/* Update Session Storage */
/* Update Local Storage */

let currentPlayer = "NONE";
let gameProceeded = 0;
function updatePlayer(valuePlayer) {
    /* Player */
    const playerElm = document.querySelector("#player");
    const playerInputElm = document.createElement("div");
    playerInputElm.classList.add("playerInput");
    playerInputElm.innerText = valuePlayer;
    playerElm.appendChild(playerInputElm);
    const playerDeleteElm = document.createElement("button");
    playerDeleteElm.classList.add("playerDelete");
    playerDeleteElm.innerHTML = "❌";
    playerElm.appendChild(playerDeleteElm);
    /* Delete Current Player */
    playerDeleteElm.addEventListener("click", () => {
        if (gameProceeded === 0) {
            playerElm.removeChild(playerInputElm);
            playerElm.removeChild(playerDeleteElm);
            /* Set Current Player to NONE */
            currentPlayer = "NONE";
        } else if (gameProceeded === 1) {
            /* Prevent Deleting a Player if the Game Has Started */
            alert("Deleting a current player is unavailable, because you already selected a country.");
            return;
        }
    });
}

let scorePlayer = 0;
let scoreHighest = 0;
const scorePlayerValueElm = document.querySelector("#scorePlayerValue");
scorePlayerValueElm.innerText = scorePlayer;
const scoreHighestValueElm = document.querySelector("#scoreHighestValue");
scoreHighestValueElm.innerText = scoreHighest;
function updateScore() {
    if (scorePlayer > scoreHighest) {
        scoreHighest = scorePlayer;
    }
    scorePlayerValueElm.innerText = scorePlayer;
    scoreHighestValueElm.innerText = scoreHighest;
}

let indexSelected = 0;
let countriesSelected = [];
function selectCountries() {
    /* Country 1 */
    if (indexSelected === 1) {
        const country01Elm = document.querySelector("#country01");
        let country01ValueElm = document.createElement("div");
        country01ValueElm.setAttribute("id", "country01Value");
        country01ValueElm.innerText = countriesSelected[0];
        country01Elm.appendChild(country01ValueElm);
    }
    /* Country 2 */
    if (indexSelected === 2) {
        const country02Elm = document.querySelector("#country02");
        let country02ValueElm = document.createElement("div");
        country02ValueElm.setAttribute("id", "country02Value");
        country02ValueElm.innerText = countriesSelected[1];
        country02Elm.appendChild(country02ValueElm);
    }
    /* Country 3 */
    if (indexSelected === 3) {
        const country03Elm = document.querySelector("#country03");
        let country03ValueElm = document.createElement("div");
        country03ValueElm.setAttribute("id", "country03Value");
        country03ValueElm.innerText = countriesSelected[2];
        country03Elm.appendChild(country03ValueElm);
        /* Transfer the Answer Key to Array */
        for (let i = 0; i < answerKey.length; i++) {
            if (countriesSelected[0] === answerKey[i].country) {
                countriesSelected[0] = answerKey[i];
            }
            if (countriesSelected[1] === answerKey[i].country) {
                countriesSelected[1] = answerKey[i];
            }
            if (countriesSelected[2] === answerKey[i].country) {
                countriesSelected[2] = answerKey[i];
            }
        }
    }
}

/* Step 1: Select Countries */
function gameStep01() {
    /* Append HTML Elements to Section */
    const sectionGameElm = document.querySelector(".sectionGame");
    const sectionGameStep01Elm = document.querySelector("#sectionGameStep01");
    sectionGameElm.appendChild(sectionGameStep01Elm);
    /* HTML Element: Header */
    const sectionHeaderElm = document.createElement("div");
    sectionHeaderElm.classList.add("sectionHeader");
    sectionHeaderElm.innerHTML = "Select / 3 / Countries";
    sectionGameStep01Elm.appendChild(sectionHeaderElm);
    /* HTML Element: Country Selection — Text */
    const countrySelectionTextBoldElm = document.createElement("div");
    countrySelectionTextBoldElm.classList.add("countrySelectionTextBold");
    countrySelectionTextBoldElm.innerHTML = "ATTENTION:";
    sectionGameStep01Elm.appendChild(countrySelectionTextBoldElm);
    /* HTML Element: Country Selection — Text Bold */
    const countrySelectionTextElm = document.createElement("div");
    countrySelectionTextElm.classList.add("countrySelectionText");
    countrySelectionTextElm.innerHTML = "Once selected a country, you can't change your selection.";
    sectionGameStep01Elm.appendChild(countrySelectionTextElm);
    /* HTML Element: Country Selection */
    const countrySelectionElm = document.createElement("div");
    countrySelectionElm.classList.add("countrySelection");
    sectionGameStep01Elm.appendChild(countrySelectionElm);
    /* HTML Element: Country — Azerbaijan */
    const countryAzerbaijanElm = document.createElement("div");
    countryAzerbaijanElm.classList.add("countryName");
    countryAzerbaijanElm.innerHTML = "Azerbaijan";
    countrySelectionElm.appendChild(countryAzerbaijanElm);
    /* HTML Element: Country — Australia */
    const countryAustraliaElm = document.createElement("div");
    countryAustraliaElm.classList.add("countryName");
    countryAustraliaElm.innerHTML = "Australia";
    countrySelectionElm.appendChild(countryAustraliaElm);
    /* HTML Element: Country — Belarus */
    const countryBelarusElm = document.createElement("div");
    countryBelarusElm.classList.add("countryName");
    countryBelarusElm.innerHTML = "Belarus";
    countrySelectionElm.appendChild(countryBelarusElm);
    /* HTML Element: Country — Bulgaria */
    const countryBulgariaElm = document.createElement("div");
    countryBulgariaElm.classList.add("countryName");
    countryBulgariaElm.innerHTML = "Bulgaria";
    countrySelectionElm.appendChild(countryBulgariaElm);
    /* HTML Element: Country — Canada */
    const countryCanadaElm = document.createElement("div");
    countryCanadaElm.classList.add("countryName");
    countryCanadaElm.innerHTML = "Canada";
    countrySelectionElm.appendChild(countryCanadaElm);
    /* HTML Element: Country — Colombia */
    const countryColombiaElm = document.createElement("div");
    countryColombiaElm.classList.add("countryName");
    countryColombiaElm.innerHTML = "Colombia";
    countrySelectionElm.appendChild(countryColombiaElm);
    /* HTML Element: Country — Denmark */
    const countryDenmarkElm = document.createElement("div");
    countryDenmarkElm.classList.add("countryName");
    countryDenmarkElm.innerHTML = "Denmark";
    countrySelectionElm.appendChild(countryDenmarkElm);
    /* HTML Element: Country — Ecuador */
    const countryEcuadorElm = document.createElement("div");
    countryEcuadorElm.classList.add("countryName");
    countryEcuadorElm.innerHTML = "Ecuador";
    countrySelectionElm.appendChild(countryEcuadorElm);
    /* HTML Element: Country — Finland */
    const countryFinlandElm = document.createElement("div");
    countryFinlandElm.classList.add("countryName");
    countryFinlandElm.innerHTML = "Finland";
    countrySelectionElm.appendChild(countryFinlandElm);
    /* HTML Element: Country — Ghana */
    const countryGhanaElm = document.createElement("div");
    countryGhanaElm.classList.add("countryName");
    countryGhanaElm.innerHTML = "Ghana";
    countrySelectionElm.appendChild(countryGhanaElm);
    /* HTML Element: Country — Iceland */
    const countryIcelandElm = document.createElement("div");
    countryIcelandElm.classList.add("countryName");
    countryIcelandElm.innerHTML = "Iceland";
    countrySelectionElm.appendChild(countryIcelandElm);
    /* HTML Element: Country — Kazakhstan */
    const countryKazakhstanElm = document.createElement("div");
    countryKazakhstanElm.classList.add("countryName");
    countryKazakhstanElm.innerHTML = "Kazakhstan";
    countrySelectionElm.appendChild(countryKazakhstanElm);
    /* HTML Element: Country — Lithuania */
    const countryLithuaniaElm = document.createElement("div");
    countryLithuaniaElm.classList.add("countryName");
    countryLithuaniaElm.innerHTML = "Lithuania";
    countrySelectionElm.appendChild(countryLithuaniaElm);
    /* HTML Element: Country — Moldova */
    const countryMoldovaElm = document.createElement("div");
    countryMoldovaElm.classList.add("countryName");
    countryMoldovaElm.innerHTML = "Moldova";
    countrySelectionElm.appendChild(countryMoldovaElm);
    /* HTML Element: Country — Pakistan */
    const countryPakistanElm = document.createElement("div");
    countryPakistanElm.classList.add("countryName");
    countryPakistanElm.innerHTML = "Pakistan";
    countrySelectionElm.appendChild(countryPakistanElm);
    /* HTML Element: Button to Continue */
    const buttonStep01Elm = document.createElement("button");
    buttonStep01Elm.setAttribute("id", "buttonStep01");
    buttonStep01Elm.classList.add("buttonLocked");
    buttonStep01Elm.innerHTML = "Click to Continue";
    sectionGameStep01Elm.appendChild(buttonStep01Elm);

    /* Loop Through 15 Countries */
    const countryNameElm = document.querySelectorAll(".countryName");
    for (let i = 0; i < countryNameElm.length; i++) {
        countryNameElm[i].addEventListener("click", () => {
            if (currentPlayer === "NONE") {
                /* Do Not Proceed If Current Player is Not Selected */
                alert("Before choosing the countries for the game, please add the player.");
                return;
            } else if (indexSelected !== 3) {
                gameProceeded = 1;
                /* Select Only Three Elements */
                countryNameElm[i].classList.add("countryNameSelected");
                countriesSelected[indexSelected] = countryNameElm[i].innerText;
                indexSelected++;
                /* Set Countries List Based on Selection */
                selectCountries();
                /* If Three Countries Are Selected, Lock the Remaining Countries */
                if (indexSelected === 3) {
                    for (let i = 0; i < countryNameElm.length; i++) {
                        if (countryNameElm[i].classList.contains("countryNameSelected")) continue;
                        else {
                            countryNameElm[i].classList.add("countryNameLocked");
                        }
                    }
                    buttonStep01Elm.classList.add("buttonUnlocked");
                }
            }
        });
    }

    /* Proceed To Quiz */
    buttonStep01Elm.addEventListener("click", () => {
        if (indexSelected !== 3) {
            alert("Before proceeding to game, please select the countries.");
            return;
        } else {
            sectionGameElm.removeChild(sectionGameStep01Elm);
            gameStep02();
        }
    });
}

let answersCorrect = 0;
let answersWrong = 0;
let answersStorage = []; /* Array to Display Answers After the Game */
function addAnswerClass() {
    const quizAnswerElm = document.querySelectorAll(".quizAnswer");
    for (let i = 0; i < quizAnswerElm.length; i++) {
        if (quizAnswerElm[i].innerText === correctAnswer) {
            quizAnswerElm[i].classList.add("quizAnswerCorrect");
        } else if (!quizAnswerElm[i].classList.contains("quizAnswerCorrect")) {
            quizAnswerElm[i].classList.add("quizAnswerWrong");
        }
    }
}

function clearAnswerClass() {
    /* Loop Through Other Answers */
    const quizAnswerElm = document.querySelectorAll(".quizAnswer");
    for (let i = 0; i < quizAnswerElm.length; i++) {
        if (quizAnswerElm[i].classList.contains("quizAnswerCorrect")) {
            quizAnswerElm[i].classList.remove("quizAnswerCorrect");
        }
        if (quizAnswerElm[i].classList.contains("quizAnswerWrong")) {
            quizAnswerElm[i].classList.remove("quizAnswerWrong");
        }
    }
}

let correctAnswer;
let randomAnswer;
let randomAnswers = [];
let quizAnswer01Elm, quizAnswer02Elm, quizAnswer03Elm, quizAnswer04Elm;
function shuffleAnswers() {
    randomAnswers.sort(() => Math.random() - 0.5); /* This Code Was Taken From: https://javascript.info/array-methods — Wiktoria Drezner, 16/05/2022 */
    /* Set the Shuffled Answers */
    quizAnswer01Elm.innerText = randomAnswers[0];
    quizAnswer02Elm.innerText = randomAnswers[1];
    quizAnswer03Elm.innerText = randomAnswers[2];
    quizAnswer04Elm.innerText = randomAnswers[3];
}

let xP = 0; /* Country Counter */
let questionCounter = 0;
let quizQuestionElm, parameter01QuestionNrElm, parameter02CountryElm, parameter03TopicElm;
function generateAnswers() {
    /* Clear Answers' Correct/Wrong Class */
    clearAnswerClass();

    /* Increase Question Number */
    questionCounter++;
    parameter01QuestionNrElm.innerText = questionCounter;

    /* Set Country Parameter */
    if ([1, 2, 3, 4].includes(questionCounter)) {
        xP = 0;
        parameter02CountryElm.innerText = countriesSelected[xP].country;
    } else if ([5, 6, 7, 8].includes(questionCounter)) {
        xP = 1;
        parameter02CountryElm.innerText = countriesSelected[xP].country;
    } else if ([9, 10, 11, 12].includes(questionCounter)) {
        xP = 2;
        parameter02CountryElm.innerText = countriesSelected[xP].country;
    }

    /* Set Topic Parameter + Generate Answers */
    if ([1, 5, 9].includes(questionCounter)) {
        parameter03TopicElm.innerText = "Capital City";
        quizQuestionElm.innerHTML = "What is the capital city of the following country?";
        /* Put Correct Answer to the Array */
        correctAnswer = countriesSelected[xP].capital;
        randomAnswers[0] = correctAnswer;
        /* Generate Three Random Answers */
        let loopRound = 1;
        do {
            randomAnswer = bankCapital[Math.floor(Math.random() * bankCapital.length)];
            if (!randomAnswers.includes(randomAnswer)) {
                randomAnswers[loopRound] = randomAnswer;
                loopRound++;
            }
        } while (loopRound < 4);
        /* Shuffle the Answers */
        shuffleAnswers();
    } else if ([2, 6, 10].includes(questionCounter)) {
        parameter03TopicElm.innerText = "Flag";
        quizQuestionElm.innerHTML = "What is the flag of the following country?";
        /* Put Correct Answer to the Array */
        correctAnswer = countriesSelected[xP].flag;
        randomAnswers[0] = correctAnswer;
        /* Generate Three Random Answers */
        let loopRound = 1;
        do {
            randomAnswer = bankFlag[Math.floor(Math.random() * bankFlag.length)];
            if (!randomAnswers.includes(randomAnswer)) {
                randomAnswers[loopRound] = randomAnswer;
                loopRound++;
            }
        } while (loopRound < 4);
        /* Shuffle the Answers */
        shuffleAnswers();
    } else if ([3, 7, 11].includes(questionCounter)) {
        parameter03TopicElm.innerText = "Famous Food";
        quizQuestionElm.innerHTML = "What is the famous food in the following country?";
        /* Put Correct Answer to the Array */
        correctAnswer = countriesSelected[xP].food;
        randomAnswers[0] = correctAnswer;
        /* Generate Three Random Answers */
        let loopRound = 1;
        do {
            randomAnswer = bankFood[Math.floor(Math.random() * bankFood.length)];
            if (!randomAnswers.includes(randomAnswer)) {
                randomAnswers[loopRound] = randomAnswer;
                loopRound++;
            }
        } while (loopRound < 4);
        /* Shuffle the Answers */
        shuffleAnswers();
    } else if ([4, 8, 12].includes(questionCounter)) {
        parameter03TopicElm.innerText = "Population";
        quizQuestionElm.innerHTML = "What is the population of the following country?";
        /* Put Correct Answer to the Array */
        correctAnswer = countriesSelected[xP].population;
        randomAnswers[0] = correctAnswer;
        /* Generate Three Random Answers */
        let loopRound = 1;
        do {
            randomAnswer = bankPopulation[Math.floor(Math.random() * bankPopulation.length)];
            if (!randomAnswers.includes(randomAnswer)) {
                randomAnswers[loopRound] = randomAnswer;
                loopRound++;
            }
        } while (loopRound < 4);
        /* Shuffle the Answers */
        shuffleAnswers();
    }
}

let jokerCounter = 0; /* Variable That Holds the Points For Joker */
function actionJoker() {
    /* Jokers Available */
    const jokersAvailableElm = document.querySelector("#jokersAvailable");
    const jokerAvailableElm = document.createElement("div");
    jokerAvailableElm.setAttribute("id", "jokerAvailable");
    jokerAvailableElm.innerHTML = "⏱️";
    /* Jokers Purchased */
    const jokersPurchasedElm = document.querySelector("#jokersUsed");
    const jokerPurchasedElm = document.createElement("div");
    jokerPurchasedElm.setAttribute("id", "jokerUsed");
    jokerPurchasedElm.innerHTML = "⏱️";

    /* Add an Available Joker */
    if (jokerCounter >= 1200) {
        jokersAvailableElm.appendChild(jokerAvailableElm);
        jokerCounter -= 1200;
    }

    /* Use an Available Joker */
    jokerAvailableElm.addEventListener("click", () => {
        /* Delete Joker From Available List */
        jokersAvailableElm.removeChild(jokerAvailableElm);
        /* Move Joker to Used */
        jokersPurchasedElm.appendChild(jokerPurchasedElm);
    });
}

let points = 0;
const pointsElm = document.querySelector("#points");
pointsElm.innerText = points;
function updatePoints() {
    if (parameter03TopicElm.innerText === "Capital City") {
        points += 150;
        jokerCounter += 150;
        pointsElm.innerText = points;
    } else if (parameter03TopicElm.innerText === "Flag") {
        points += 200;
        jokerCounter += 200;
        pointsElm.innerText = points;
    } else if (parameter03TopicElm.innerText === "Famous Food") {
        points += 300;
        jokerCounter += 300;
        pointsElm.innerText = points;
    } else if (parameter03TopicElm.innerText === "Population") {
        points += 250;
        jokerCounter += 250;
        pointsElm.innerText = points;
    }
    actionJoker();
}

/* Step 2: Quiz */
let answerSelected = 0;
let answerClickCounter = 0;
function gameStep02() {
    const sectionGameElm = document.querySelector(".sectionGame");
    const sectionGameStep02Elm = document.querySelector("#sectionGameStep02");
    sectionGameElm.appendChild(sectionGameStep02Elm);
    /* HTML Element: Header */
    const sectionHeaderElm = document.createElement("div");
    sectionHeaderElm.classList.add("sectionHeader");
    sectionHeaderElm.innerHTML = "Geography Quiz";
    sectionGameStep02Elm.appendChild(sectionHeaderElm);
    /* HTML Element: Quiz Parameters */
    const quizParametersElm = document.createElement("div");
    quizParametersElm.classList.add("quizParameters");
    sectionGameStep02Elm.appendChild(quizParametersElm);
    /* HTML Element: Quiz Parameter 1 */
    const quizParameter01Elm = document.createElement("div");
    quizParameter01Elm.classList.add("quizParameter");
    const parameter01TextBoldElm = document.createElement("div");
    parameter01TextBoldElm.classList.add("parameterTextBold");
    parameter01TextBoldElm.innerHTML = "QUESTION:";
    quizParameter01Elm.appendChild(parameter01TextBoldElm);
    parameter01QuestionNrElm = document.createElement("div"); /* Will be Updated */
    parameter01QuestionNrElm.setAttribute("id", "parameterQuestionNr");
    quizParameter01Elm.appendChild(parameter01QuestionNrElm);
    quizParametersElm.appendChild(quizParameter01Elm);
    /* HTML Element: Quiz Parameter 2 */
    const quizParameter02Elm = document.createElement("div");
    quizParameter02Elm.classList.add("quizParameter");
    const parameter02TextBoldElm = document.createElement("div");
    parameter02TextBoldElm.classList.add("parameterTextBold");
    parameter02TextBoldElm.innerHTML = "COUNTRY:";
    quizParameter02Elm.appendChild(parameter02TextBoldElm);
    parameter02CountryElm = document.createElement("div"); /* Will be Updated */
    parameter02CountryElm.setAttribute("id", "parameterCountry");
    quizParameter02Elm.appendChild(parameter02CountryElm);
    quizParametersElm.appendChild(quizParameter02Elm);
    /* HTML Element: Quiz Parameter 3 */
    const quizParameter03Elm = document.createElement("div");
    quizParameter03Elm.classList.add("quizParameter");
    const parameter03TextBoldElm = document.createElement("div");
    parameter03TextBoldElm.classList.add("parameterTextBold");
    parameter03TextBoldElm.innerHTML = "TOPIC:";
    quizParameter03Elm.appendChild(parameter03TextBoldElm);
    parameter03TopicElm = document.createElement("div"); /* Will be Updated */
    parameter03TopicElm.setAttribute("id", "parameterTopic");
    quizParameter03Elm.appendChild(parameter03TopicElm);
    quizParametersElm.appendChild(quizParameter03Elm);
    /* HTML Element: Quiz Question */
    quizQuestionElm = document.createElement("div"); /* Will be Updated */
    quizQuestionElm.classList.add("quizQuestion");
    sectionGameStep02Elm.appendChild(quizQuestionElm);
    /* HTML Element: Quiz Answers */
    const quizAnswersElm = document.createElement("div");
    quizAnswersElm.classList.add("quizAnswers");
    sectionGameStep02Elm.appendChild(quizAnswersElm);
    /* HTML Element: Quiz Answer 1 */
    quizAnswer01Elm = document.createElement("button"); /* Will be Updated */
    quizAnswer01Elm.setAttribute("id", "quizAnswer01");
    quizAnswer01Elm.classList.add("quizAnswer");
    quizAnswersElm.appendChild(quizAnswer01Elm);
    /* HTML Element: Quiz Answer 2 */
    quizAnswer02Elm = document.createElement("button"); /* Will be Updated */
    quizAnswer02Elm.setAttribute("id", "quizAnswer02");
    quizAnswer02Elm.classList.add("quizAnswer");
    quizAnswersElm.appendChild(quizAnswer02Elm);
    /* HTML Element: Quiz Answer 3 */
    quizAnswer03Elm = document.createElement("button"); /* Will be Updated */
    quizAnswer03Elm.setAttribute("id", "quizAnswer03");
    quizAnswer03Elm.classList.add("quizAnswer");
    quizAnswersElm.appendChild(quizAnswer03Elm);
    /* HTML Element: Quiz Answer 4 */
    quizAnswer04Elm = document.createElement("button"); /* Will be Updated */
    quizAnswer04Elm.setAttribute("id", "quizAnswer04");
    quizAnswer04Elm.classList.add("quizAnswer");
    quizAnswersElm.appendChild(quizAnswer04Elm);
    /* HTML Element: Button to Continue */
    const buttonStep02Elm = document.createElement("button");
    buttonStep02Elm.setAttribute("id", "buttonStep02");
    buttonStep02Elm.classList.add("buttonLocked");
    buttonStep02Elm.innerHTML = "Next Question";
    sectionGameStep02Elm.appendChild(buttonStep02Elm);

    /* Generate First Question + Answers */
    generateAnswers();

    /* Proceed to Next Question */
    buttonStep02Elm.addEventListener("click", () => {
        buttonStep02Elm.classList.remove("buttonUnlocked");
        /* Proceed to Results */
        if (questionCounter === 11) {
            buttonStep02Elm.innerHTML = "Proceed to Results";
        } else if (questionCounter === 12) {
            sectionGameElm.removeChild(sectionGameStep02Elm);
            gameStep03();
        }
        /* Generate Next Question + Answers */
        if (answerSelected === 1) {
            generateAnswers();
            answerSelected = 0;
            /* Reset Click Counter */
            answerClickCounter = 0;
        } else {
            alert("Select an answer before moving to another question");
            return;
        }
    });

    /* Select an Answer */
    const quizAnswerElm = document.querySelectorAll(".quizAnswer");
    for (let i = 0; i < quizAnswerElm.length; i++) {
        quizAnswerElm[i].addEventListener("click", () => {
            buttonStep02Elm.classList.add("buttonUnlocked");
            answerSelected = 1;
            answerClickCounter++;
            if (answerClickCounter === 1) {
                if (quizAnswerElm[i].innerText === correctAnswer) {
                    /* The Answer Is Correct */
                    quizAnswerElm[i].classList.add("quizAnswerCorrect");
                    answersCorrect++;
                    /* Push the Answer to the Storage */
                    answersStorage.push({
                        number: parameter01QuestionNrElm.innerText,
                        country: parameter02CountryElm.innerText,
                        topic: parameter03TopicElm.innerText,
                        answer: quizAnswerElm[i].innerText,
                        status: "correct",
                    });
                    /* Update Points */
                    updatePoints();
                } else {
                    /* The Answer Is Wrong */
                    quizAnswerElm[i].classList.add("quizAnswerWrong");
                    answersWrong++;
                    /* Push the Answer to the Storage */
                    answersStorage.push({
                        number: parameter01QuestionNrElm.innerText,
                        country: parameter02CountryElm.innerText,
                        topic: parameter03TopicElm.innerText,
                        answer: quizAnswerElm[i].innerText,
                        status: "wrong",
                    });
                }
                addAnswerClass();
            }
        });
    }
}

/* Step 3: Results */
function gameStep03() {
    /* Update Player Score */
    scorePlayer = points;
    updateScore();

    const sectionGameElm = document.querySelector(".sectionGame");
    const sectionGameStep03Elm = document.querySelector("#sectionGameStep03");
    sectionGameElm.appendChild(sectionGameStep03Elm);
    /* HTML Element: Header */
    const sectionHeaderElm = document.createElement("div");
    sectionHeaderElm.classList.add("sectionHeader");
    sectionHeaderElm.innerHTML = "Results of the Game";
    sectionGameStep03Elm.appendChild(sectionHeaderElm);
    /* HTML Element: Results Correct */
    const resultsCorrectElm = document.createElement("div");
    resultsCorrectElm.classList.add("resultsHolder");
    const resultsCorrectTextElm = document.createElement("div");
    resultsCorrectTextElm.classList.add("resultsHolderText");
    resultsCorrectTextElm.innerHTML = "Correct Answers:";
    resultsCorrectElm.appendChild(resultsCorrectTextElm);
    let resultsCorrectValueElm = document.createElement("div");
    resultsCorrectValueElm.setAttribute("id", "resultsCorrectValue");
    resultsCorrectElm.appendChild(resultsCorrectValueElm);
    sectionGameStep03Elm.appendChild(resultsCorrectElm);
    /* HTML Element: Results Wrong */
    const resultsWrongElm = document.createElement("div");
    resultsWrongElm.classList.add("resultsHolder");
    const resultsWrongTextElm = document.createElement("div");
    resultsWrongTextElm.classList.add("resultsHolderText");
    resultsWrongTextElm.innerHTML = "Wrong Answers:";
    resultsWrongElm.appendChild(resultsWrongTextElm);
    let resultsWrongValueElm = document.createElement("div");
    resultsWrongValueElm.setAttribute("id", "resultsWrongValue");
    resultsWrongElm.appendChild(resultsWrongValueElm);
    sectionGameStep03Elm.appendChild(resultsWrongElm);
    /* HTML Element: Results Headlines */
    const resultsHeadlinesElm = document.createElement("div");
    resultsHeadlinesElm.classList.add("resultsHeadlines");
    /* HTML Element: Headline: Question Number */
    const resultHeadline01Elm = document.createElement("div");
    resultHeadline01Elm.classList.add("resultHeadline");
    resultHeadline01Elm.innerHTML = "Question Number";
    resultsHeadlinesElm.appendChild(resultHeadline01Elm);
    /* HTML Element: Headline: Country */
    const resultHeadline02Elm = document.createElement("div");
    resultHeadline02Elm.classList.add("resultHeadline");
    resultHeadline02Elm.innerHTML = "Country";
    resultsHeadlinesElm.appendChild(resultHeadline02Elm);
    /* HTML Element: Headline: Topic */
    const resultHeadline03Elm = document.createElement("div");
    resultHeadline03Elm.classList.add("resultHeadline");
    resultHeadline03Elm.innerHTML = "Topic";
    resultsHeadlinesElm.appendChild(resultHeadline03Elm);
    /* HTML Element: Headline: Answer */
    const resultHeadline04Elm = document.createElement("div");
    resultHeadline04Elm.classList.add("resultHeadline");
    resultHeadline04Elm.innerHTML = "Answer";
    resultsHeadlinesElm.appendChild(resultHeadline04Elm);
    /* HTML Element: Headline: Status */
    const resultHeadline05Elm = document.createElement("div");
    resultHeadline05Elm.classList.add("resultHeadline");
    resultHeadline05Elm.innerHTML = "Status";
    resultsHeadlinesElm.appendChild(resultHeadline05Elm);
    sectionGameStep03Elm.appendChild(resultsHeadlinesElm);
    /* HTML Element: Results List */
    const resultsListElm = document.createElement("div");
    resultsListElm.setAttribute("id", "resultsList");
    sectionGameStep03Elm.appendChild(resultsListElm);
    /* HTML Element: Button to Restart the Game */
    const buttonHolderElm = document.createElement("div");
    buttonHolderElm.classList.add("buttonHolder");
    const buttonStep03Elm = document.createElement("button");
    buttonStep03Elm.setAttribute("id", "buttonStep03");
    buttonStep03Elm.classList.add("buttonUnlocked");
    buttonStep03Elm.innerHTML = "Play Again";
    buttonHolderElm.appendChild(buttonStep03Elm);
    sectionGameStep03Elm.appendChild(buttonHolderElm);

    /* Display Number of Correct/Wrong Answers */
    resultsCorrectValueElm.innerText = answersCorrect;
    resultsWrongValueElm.innerText = answersWrong;

    /* Display Results Dynamically */
    for (let i = 0; i < 12; i++) {
        /* Add Value Dynamically: Question Number */
        const resultQuestionElm = document.createElement("div");
        let resultQuestionNameElm = "resultQuestion" + i; /* Dynamically Create an Id */
        resultQuestionElm.classList.add("resultValue");
        resultQuestionElm.setAttribute("id", resultQuestionNameElm);
        resultQuestionElm.innerText = answersStorage[i].number;
        resultsListElm.appendChild(resultQuestionElm);
        /* Add Value Dynamically: Country */
        const resultCountryElm = document.createElement("div");
        let resultCountryNameElm = "resultCountry" + i; /* Dynamically Create an Id */
        resultCountryElm.classList.add("resultValue");
        resultCountryElm.setAttribute("id", resultCountryNameElm);
        resultCountryElm.innerText = answersStorage[i].country;
        resultsListElm.appendChild(resultCountryElm);
        /* Add Value Dynamically: Topic */
        const resultTopicElm = document.createElement("div");
        let resultTopicNameElm = "resultTopic" + i; /* Dynamically Create an Id */
        resultTopicElm.classList.add("resultValue");
        resultTopicElm.setAttribute("id", resultTopicNameElm);
        resultTopicElm.innerText = answersStorage[i].topic;
        resultsListElm.appendChild(resultTopicElm);
        /* Add Value Dynamically: Answer */
        const resultAnswerElm = document.createElement("div");
        let resultAnswerNameElm = "resultAnswer" + i; /* Dynamically Create an Id */
        resultAnswerElm.classList.add("resultValue");
        resultAnswerElm.setAttribute("id", resultAnswerNameElm);
        resultAnswerElm.innerText = answersStorage[i].answer;
        resultsListElm.appendChild(resultAnswerElm);
        /* Add Value Dynamically: Status */
        const resultStatusElm = document.createElement("div");
        let resultStatusNameElm = "resultStatus" + i; /* Dynamically Create an Id */
        resultStatusElm.classList.add("resultValue");
        resultStatusElm.setAttribute("id", resultStatusNameElm);
        resultStatusElm.innerText = answersStorage[i].status;
        if (answersStorage[i].status === "correct") {
            resultStatusElm.classList.add("resultValueCorrect");
        } else {
            resultStatusElm.classList.add("resultValueWrong");
        }
        resultsListElm.appendChild(resultStatusElm);
        if (i === 3 || i === 7) {
            resultStatusElm.classList.add("resultSpace");
        }
    }

    /* Restart the Game */
    buttonStep03Elm.addEventListener("click", () => {
        location.reload();
    });
}

window.addEventListener("load", () => {
    /* Add a New Player */
    const playerFormElement = document.querySelector("#formAddPlayer");
    const playerInputElement = document.querySelector("#inputAddPlayer");
    playerFormElement.addEventListener("submit", (e) => {
        e.preventDefault();
        /* Check if the Player Has Been Added */
        if (currentPlayer === "NONE") {
            /* Check Whether Player Name is Entered */
            if (!playerInputElement.value) {
                alert("Enter player name to continue.");
                return;
            }
            /* Save Added Player to Current Player */
            currentPlayer = playerInputElement.value;
            /* Call Function to Add/Delete Player */
            updatePlayer(currentPlayer);
            /* Clear Player Input */
            playerInputElement.value = "";
        } else if (currentPlayer !== "NONE") {
            /* Prevent Adding Another Player */
            alert("The player has been added already. Delete the current player before adding a new one.");
            return;
        }
    });

    /* Proceed to Country Selection */
    gameStep01();
});
