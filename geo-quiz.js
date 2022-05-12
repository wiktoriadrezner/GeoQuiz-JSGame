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

let points = 0;
function actionPoints() {
    const pointsElm = document.querySelector("#points");
    pointsElm.innerText = points;
}

let indexSelected = 0;
let countriesSelected = [];
function actionCountry() {
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
    }
}

let currentPlayer = "NONE";
function actionPlayer(valuePlayer) {
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
        playerElm.removeChild(playerInputElm);
        playerElm.removeChild(playerDeleteElm);
        /* Set Current Player to NONE */
        currentPlayer = "NONE";
    });
}

let scorePlayer = 0;
let scoreHighest = 0;
function actionScore() {
    /* Player Score */
    const scorePlayerElm = document.querySelector("#scorePlayer");
    const scorePlayerValueElm = document.createElement("div");
    scorePlayerValueElm.classList.add("scorePlayerValue");
    scorePlayerValueElm.innerText = scorePlayer;
    scorePlayerElm.appendChild(scorePlayerValueElm);
    /* Highest Score */
    const scoreHighestElm = document.querySelector("#scoreHighest");
    const scoreHighestValueElm = document.createElement("div");
    scoreHighestValueElm.classList.add("scoreHighestValue");
    scoreHighestValueElm.innerText = scoreHighest;
    scoreHighestElm.appendChild(scoreHighestValueElm);
}

function actionJoker() {
    /* Jokers Available */
    const jokersAvailableElm = document.querySelector("#jokersAvailable");
    const jokerAvailableElm = document.createElement("div");
    jokerAvailableElm.setAttribute("id", "jokerAvailable");
    jokerAvailableElm.innerHTML = "⏱️";
    /* Add an Available Joker */
    jokersAvailableElm.appendChild(jokerAvailableElm);
    /* Jokers Purchased */
    const jokersPurchasedElm = document.querySelector("#jokersPurchased");
    const jokerPurchasedElm = document.createElement("div");
    jokerPurchasedElm.setAttribute("id", "jokerPurchased");
    jokerPurchasedElm.innerHTML = "⏱️";
    /* Purchase an Available Joker */
    jokerAvailableElm.addEventListener("click", () => {
        /* Delete Joker From Available List */
        jokersAvailableElm.removeChild(jokerAvailableElm);
        /* Add a Joker to Purchased */
        jokersPurchasedElm.appendChild(jokerPurchasedElm);
    });
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
    const buttonContinueElm = document.createElement("div");
    buttonContinueElm.setAttribute("id", "buttonContinue");
    buttonContinueElm.classList.add("buttonContinueLocked");
    buttonContinueElm.innerHTML = "Click to Continue";
    sectionGameStep01Elm.appendChild(buttonContinueElm);

    /* Loop Through 15 Countries */
    const countryNameElm = document.querySelectorAll(".countryName");
    for (let i = 0; i < countryNameElm.length; i++) {
        countryNameElm[i].addEventListener("click", () => {
            if (currentPlayer === "NONE") {
                /* Do Not Proceed If Current Player is Not Selected */
                alert("Before choosing the countries for the game, please add the player.");
                return;
            } else if (indexSelected !== 3) {
                /* Select Only Three Elements */
                countryNameElm[i].classList.add("countryNameSelected");
                countriesSelected[indexSelected] = countryNameElm[i].innerText;
                indexSelected++;
                /* Set Countries List Based on Selection */
                actionCountry();
                /* If Three Countries Are Selected, Lock the Remaining Countries */
                if (indexSelected === 3) {
                    for (let i = 0; i < countryNameElm.length; i++) {
                        if (countryNameElm[i].classList.contains("countryNameSelected")) continue;
                        else {
                            countryNameElm[i].classList.add("countryNameLocked");
                        }
                    }
                    buttonContinueElm.classList.add("buttonContinueUnlocked");
                }
            }
        });
    }

    /* Proceed To Quiz */
    buttonContinueElm.addEventListener("click", () => {
        if (indexSelected !== 3) {
            alert("Before proceeding to game, please select the countries.");
            return;
        } else {
            sectionGameElm.removeChild(sectionGameStep01Elm);
            gameStep02();
        }
    });
}

/* Step 2: Quiz */
let answersCorrect = 0;
let answersWrong = 0;

let answer01 = "Answer 1";
let answer02 = "Answer 2";
let answer03 = "Answer 3";
let answer04 = "Answer 4";

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
    const parameter01QuestionNrElm = document.createElement("div");
    parameter01QuestionNrElm.setAttribute("id", "parameterQuestionNr");
    parameter01QuestionNrElm.innerText = "1 / 12";
    quizParameter01Elm.appendChild(parameter01QuestionNrElm);
    quizParametersElm.appendChild(quizParameter01Elm);
    /* HTML Element: Quiz Parameter 2 */
    const quizParameter02Elm = document.createElement("div");
    quizParameter02Elm.classList.add("quizParameter");
    const parameter02TextBoldElm = document.createElement("div");
    parameter02TextBoldElm.classList.add("parameterTextBold");
    parameter02TextBoldElm.innerHTML = "COUNTRY:";
    quizParameter02Elm.appendChild(parameter02TextBoldElm);
    const parameter02CountryElm = document.createElement("div");
    parameter02CountryElm.setAttribute("id", "parameterCountry");
    parameter02CountryElm.innerText = "Australia";
    quizParameter02Elm.appendChild(parameter02CountryElm);
    quizParametersElm.appendChild(quizParameter02Elm);
    /* HTML Element: Quiz Parameter 3 */
    const quizParameter03Elm = document.createElement("div");
    quizParameter03Elm.classList.add("quizParameter");
    const parameter03TextBoldElm = document.createElement("div");
    parameter03TextBoldElm.classList.add("parameterTextBold");
    parameter03TextBoldElm.innerHTML = "TOPIC:";
    quizParameter03Elm.appendChild(parameter03TextBoldElm);
    const parameter03TopicElm = document.createElement("div");
    parameter03TopicElm.setAttribute("id", "parameterTopic");
    parameter03TopicElm.innerText = "Capital City";
    quizParameter03Elm.appendChild(parameter03TopicElm);
    quizParametersElm.appendChild(quizParameter03Elm);
    /* HTML Element: Quiz Question */
    const quizQuestionElm = document.createElement("div");
    quizQuestionElm.classList.add("quizQuestion");
    quizQuestionElm.innerHTML = "What is the capital city of the following country?";
    sectionGameStep02Elm.appendChild(quizQuestionElm);
    /* HTML Element: Quiz Answers */
    const quizAnswersElm = document.createElement("div");
    quizAnswersElm.classList.add("quizAnswers");
    sectionGameStep02Elm.appendChild(quizAnswersElm);
    /* HTML Element: Quiz Answer 1 */
    const quizAnswer01Elm = document.createElement("div");
    quizAnswer01Elm.setAttribute("id", "quizAnswer01");
    quizAnswer01Elm.innerText = answer01;
    quizAnswersElm.appendChild(quizAnswer01Elm);
    /* HTML Element: Quiz Answer 2 */
    const quizAnswer02Elm = document.createElement("div");
    quizAnswer02Elm.setAttribute("id", "quizAnswer02");
    quizAnswer02Elm.innerText = answer02;
    quizAnswersElm.appendChild(quizAnswer02Elm);
    /* HTML Element: Quiz Answer 3 */
    const quizAnswer03Elm = document.createElement("div");
    quizAnswer03Elm.setAttribute("id", "quizAnswer03");
    quizAnswer03Elm.innerText = answer03;
    quizAnswersElm.appendChild(quizAnswer03Elm);
    /* HTML Element: Quiz Answer 4 */
    const quizAnswer04Elm = document.createElement("div");
    quizAnswer04Elm.setAttribute("id", "quizAnswer04");
    quizAnswer04Elm.innerText = answer04;
    quizAnswersElm.appendChild(quizAnswer04Elm);

    /* Begin the Game (12 Questions) */
    for (let i = 0; i < 12; i++) {}
}

/* Step 3: Results */
function gameStep03() {}

window.addEventListener("load", () => {
    for (let i = 0; i < 15; i++) {
        console.log(answerKey[i].population);
    }
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
            actionPlayer(currentPlayer);
            /* Clear Player Input */
            playerInputElement.value = "";
        } else if (currentPlayer !== "NONE") {
            /* Prevent Adding Another Player */
            alert("The player has been added already. Delete the current player before adding a new one.");
            return;
        }
    });

    /* Begin Game: Choose Countries */
    gameStep01();

    /* Update Score */
    actionScore();

    /* Display Current Points */
    actionPoints();

    /* Joker */
    for (i = 0; i < 15; i++) {
        /* Add a Joker if Player Answered 4/8/12 Questions Correctly */
        if ([4, 8, 12].includes(answersCorrect)) {
            actionJoker();
        }
        answersCorrect++;
    }
});
