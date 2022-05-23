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
let bankFlag = [
  "🇦🇿",
  "🇦🇺",
  "🇧🇾",
  "🇧🇬",
  "🇨🇦",
  "🇨🇴",
  "🇩🇰",
  "🇪🇨",
  "🇫🇮",
  "🇬🇭",
  "🇮🇸",
  "🇰🇿",
  "🇱🇹",
  "🇲🇩",
  "🇵🇰",
];
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

/* Game Sections */
let sectionGameElm = document.querySelector(".sectionGame");
let sectionGameStep01Elm = document.querySelector("#sectionGameStep01");
sectionGameElm.appendChild(sectionGameStep01Elm);
let sectionGameStep02Elm = document.querySelector("#sectionGameStep02");
sectionGameElm.appendChild(sectionGameStep02Elm);
let sectionGameStep03Elm = document.querySelector("#sectionGameStep03");
sectionGameElm.appendChild(sectionGameStep03Elm);

/* Game Timer */
let timeLeft = "–";
const timeElm = document.querySelector("#time");
timeElm.innerText = timeLeft;
function timer() {
  timeLeft--;
  timeElm.innerText = timeLeft;
  sessionStorage.timeLeft = JSON.stringify(timeLeft);
  if (timeLeft > 0) {
    setTimeout(timer, 1000);
  }
}

let currentPlayer = "NONE";
let gameProceeded = 0;
function updatePlayer() {
  /* Player */
  const playerElm = document.querySelector("#player");
  const playerInputElm = document.createElement("div");
  playerInputElm.classList.add("playerInput");
  playerInputElm.innerText = currentPlayer;
  playerElm.appendChild(playerInputElm);
  const playerDeleteElm = document.createElement("button");
  playerDeleteElm.classList.add("playerDelete");
  playerDeleteElm.innerHTML = "❌";
  playerElm.appendChild(playerDeleteElm);
  /* Delete Current Player */
  playerDeleteElm.addEventListener("click", () => {
    if (gameStep === "step03" || gameProceeded === 0) {
      playerElm.removeChild(playerInputElm);
      playerElm.removeChild(playerDeleteElm);
      /* Set Current Player to NONE */
      currentPlayer = "NONE";
      localStorage.currentPlayer = JSON.stringify(currentPlayer);
      scorePlayer = 0;
      scorePlayerValueElm.innerText = scorePlayer;
      localStorage.scorePlayer = JSON.stringify(scorePlayer);
    } else if (gameProceeded === 1) {
      /* Prevent Deleting a Player UNLESS Game Is Completed */
      if (gameStep === "step01") {
        alert(
          "Deleting a current player is unavailable, because you already selected a country."
        );
        return;
      } else if (gameStep === "step02") {
        alert(
          "Deleting a current player is unavailable, because the game is in process."
        );
        return;
      }
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
  localStorage.scorePlayer = JSON.stringify(scorePlayer);
  scoreHighestValueElm.innerText = scoreHighest;
  localStorage.scoreHighest = JSON.stringify(scoreHighest);
}

let indexSelected = 0;
let countriesSelected = [];
let countriesSelectedKey = [];
function selectCountries(indexSelected) {
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
        countriesSelectedKey[0] = answerKey[i];
      }
      if (countriesSelected[1] === answerKey[i].country) {
        countriesSelectedKey[1] = answerKey[i];
      }
      if (countriesSelected[2] === answerKey[i].country) {
        countriesSelectedKey[2] = answerKey[i];
      }
    }
  }
}

/* Step 1: Select Countries */
function gameStep01() {
  gameStep = "step01";
  sessionStorage.gameStep = JSON.stringify(gameStep);

  document.getElementById("sectionGameStep01").style.display = "block";
  document.getElementById("sectionGameStep02").style.display = "none";
  document.getElementById("sectionGameStep03").style.display = "none";

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
  countrySelectionTextElm.innerHTML =
    "Once selected a country, you can't change your selection.";
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
  /* All Countries */
  const countryNameElm = document.querySelectorAll(".countryName");

  /* Retrieve the Selected Countries From Storage */
  if (indexSelected !== 0) {
    /* 3 Countries Were Selected */
    if (indexSelected === 3) {
      buttonStep01Elm.classList.add(
        "buttonUnlocked"
      ); /* Unlock the Button to Proceed */
      for (let x = 0; x < countriesSelected.length; x++) {
        for (let y = 0; y < countryNameElm.length; y++) {
          if (countriesSelected[x] === countryNameElm[y].innerHTML) {
            countryNameElm[y].classList.add("countryNameSelected");
          }
        }
      }
      /* Lock the Remaining Countries */
      for (let y = 0; y < countryNameElm.length; y++) {
        if (countryNameElm[y].classList.contains("countryNameSelected"))
          continue;
        else {
          countryNameElm[y].classList.add("countryNameLocked");
        }
      }
    } /* 1 or 2 Countries Were Selected */ else {
      for (let x = 0; x < countriesSelected.length; x++) {
        for (let y = 0; y < countryNameElm.length; y++) {
          if (countriesSelected[x] === countryNameElm[y].innerHTML) {
            countryNameElm[y].classList.add("countryNameSelected");
          }
        }
      }
    }
  }

  /* Select 3 Countries */
  for (let i = 0; i < countryNameElm.length; i++) {
    countryNameElm[i].addEventListener("click", () => {
      if (currentPlayer === "NONE") {
        /* Do Not Proceed If Current Player is Not Selected */
        alert(
          "Before choosing the countries for the game, please add the player."
        );
        return;
      } else if (indexSelected !== 3) {
        gameProceeded = 1;
        /* Select Only Three Elements */
        countryNameElm[i].classList.add("countryNameSelected");
        countriesSelected[indexSelected] = countryNameElm[i].innerText;
        sessionStorage.countriesSelected = JSON.stringify(countriesSelected);
        indexSelected++;
        sessionStorage.indexSelected = JSON.stringify(indexSelected);
        /* Set Countries List Based on Selection */
        selectCountries(indexSelected);
        /* If Three Countries Are Selected, Lock the Remaining Countries */
        if (indexSelected === 3) {
          for (let i = 0; i < countryNameElm.length; i++) {
            if (countryNameElm[i].classList.contains("countryNameSelected"))
              continue;
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
      gameStep02();
    }
  });
}

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
  randomAnswers.sort(
    () => Math.random() - 0.5
  ); /* This Code Was Taken From: https://javascript.info/array-methods — Wiktoria Drezner, 16/05/2022 */
  /* Set the Shuffled Answers */
  quizAnswer01Elm.innerText = randomAnswers[0];
  sessionStorage.quizAnswer01 = JSON.stringify(quizAnswer01Elm.innerText);
  quizAnswer02Elm.innerText = randomAnswers[1];
  sessionStorage.quizAnswer02 = JSON.stringify(quizAnswer02Elm.innerText);
  quizAnswer03Elm.innerText = randomAnswers[2];
  sessionStorage.quizAnswer03 = JSON.stringify(quizAnswer03Elm.innerText);
  quizAnswer04Elm.innerText = randomAnswers[3];
  sessionStorage.quizAnswer04 = JSON.stringify(quizAnswer04Elm.innerText);
}

let xP = 0; /* Country Counter */
let questionCounter = 1;
let firstQuestionGenerated = 0;
let parameterCountry, parameterTopic, quizQuestion;
let parameter01QuestionNrElm,
  parameter02CountryElm,
  parameter03TopicElm,
  quizQuestionElm;
function generateAnswers() {
  /* Clear Answers' Correct/Wrong Class */
  clearAnswerClass();

  /* Increase Question Number */
  parameter01QuestionNrElm.innerText = questionCounter;
  sessionStorage.questionCounter =
    JSON.stringify(questionCounter); /* Save Question Number */

  /* Set Country Parameter */
  if ([1, 2, 3, 4].includes(questionCounter)) {
    xP = 0;
    parameterCountry = countriesSelectedKey[xP].country;
  } else if ([5, 6, 7, 8].includes(questionCounter)) {
    xP = 1;
    parameterCountry = countriesSelectedKey[xP].country;
  } else if ([9, 10, 11, 12].includes(questionCounter)) {
    xP = 2;
    parameterCountry = countriesSelectedKey[xP].country;
  }
  parameter02CountryElm.innerText = parameterCountry;
  sessionStorage.parameterCountry =
    JSON.stringify(parameterCountry); /* Save Country */

  /* Set Topic Parameter + Generate Answers */
  if ([1, 5, 9].includes(questionCounter)) {
    parameterTopic = "Capital City";
    quizQuestion = "What is the capital city of the following country?";
    /* Put Correct Answer to the Array */
    correctAnswer = countriesSelectedKey[xP].capital;
    randomAnswers[0] = correctAnswer;
    /* Generate Three Random Answers */
    let loopRound = 1;
    do {
      randomAnswer =
        bankCapital[Math.floor(Math.random() * bankCapital.length)];
      if (!randomAnswers.includes(randomAnswer)) {
        randomAnswers[loopRound] = randomAnswer;
        loopRound++;
      }
    } while (loopRound < 4);
    shuffleAnswers(); /* Shuffle the Answers */
  } else if ([2, 6, 10].includes(questionCounter)) {
    parameterTopic = "Flag";
    quizQuestion = "What is the flag of the following country?";
    /* Put Correct Answer to the Array */
    correctAnswer = countriesSelectedKey[xP].flag;
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
    shuffleAnswers(); /* Shuffle the Answers */
  } else if ([3, 7, 11].includes(questionCounter)) {
    parameterTopic = "Famous Food";
    quizQuestion = "What is the famous food in the following country?";
    /* Put Correct Answer to the Array */
    correctAnswer = countriesSelectedKey[xP].food;
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
    shuffleAnswers(); /* Shuffle the Answers */
  } else if ([4, 8, 12].includes(questionCounter)) {
    parameterTopic = "Population";
    quizQuestion = "What is the population of the following country?";
    /* Put Correct Answer to the Array */
    correctAnswer = countriesSelectedKey[xP].population;
    randomAnswers[0] = correctAnswer;
    /* Generate Three Random Answers */
    let loopRound = 1;
    do {
      randomAnswer =
        bankPopulation[Math.floor(Math.random() * bankPopulation.length)];
      if (!randomAnswers.includes(randomAnswer)) {
        randomAnswers[loopRound] = randomAnswer;
        loopRound++;
      }
    } while (loopRound < 4);
    shuffleAnswers(); /* Shuffle the Answers */
  }
  parameter03TopicElm.innerText = parameterTopic;
  sessionStorage.parameterTopic =
    JSON.stringify(parameterTopic); /* Save Topic */
  quizQuestionElm.innerHTML = quizQuestion;
  sessionStorage.quizQuestion =
    JSON.stringify(quizQuestion); /* Save Question */
  sessionStorage.correctAnswer =
    JSON.stringify(correctAnswer); /* Save Correct Answer */

  timeLeft = 10;
  timer();
}

let jokerCounter = 0; /* Variable That Holds the Points For Joker */
let jokersAvailable = 0;
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
    jokersAvailable++;
    sessionStorage.jokersAvailable = JSON.stringify(jokersAvailable);
    jokerCounter -= 1200;
    sessionStorage.jokerCounter = JSON.stringify(jokerCounter);
  }
  for (let i = 0; i < jokersAvailable; i++) {
    jokersAvailableElm.appendChild(jokerAvailableElm);
  }

  /* Use an Available Joker */
  jokerAvailableElm.addEventListener("click", () => {
    timeLeft = 20;
    timer();
    /* Delete Joker From Available List */
    jokersAvailable--;
    sessionStorage.jokersAvailable = JSON.stringify(jokersAvailable);
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
  } else if (parameter03TopicElm.innerText === "Flag") {
    points += 200;
    jokerCounter += 200;
  } else if (parameter03TopicElm.innerText === "Famous Food") {
    points += 300;
    jokerCounter += 300;
  } else if (parameter03TopicElm.innerText === "Population") {
    points += 250;
    jokerCounter += 250;
  }
  sessionStorage.points = JSON.stringify(points);
  pointsElm.innerText = points;
  actionJoker();
}

/* Step 2: Quiz */
let answerSelected = 0;
let answerSelectedValue = "NONE";
let answerClickCounter = 0;
function gameStep02() {
  gameStep = "step02";
  sessionStorage.gameStep = JSON.stringify(gameStep);

  document.getElementById("sectionGameStep01").style.display = "none";
  document.getElementById("sectionGameStep02").style.display = "block";
  document.getElementById("sectionGameStep03").style.display = "none";

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
  parameter01QuestionNrElm =
    document.createElement("div"); /* Will be Updated */
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
  /* All Answers */
  const quizAnswerElm = document.querySelectorAll(".quizAnswer");

  /* Generate/Display Answers */
  if (firstQuestionGenerated === 0) {
    generateAnswers(); /* Generate First Question */
    answerSelectedValue = "NONE";
    sessionStorage.answerSelectedValue = JSON.stringify(answerSelectedValue);
    firstQuestionGenerated = 1;
    sessionStorage.firstQuestionGenerated = JSON.stringify(
      firstQuestionGenerated
    );
  } else {
    /* Retrieve Timer */
    timeElm.innerText = timeLeft;
    timer();
    /* Retrieve the Generated Parameters */
    parameter01QuestionNrElm.innerText = questionCounter; /* Question Number */
    parameter02CountryElm.innerText = parameterCountry; /* Country Name */
    parameter03TopicElm.innerText = parameterTopic; /* Topic */
    quizQuestionElm.innerHTML = quizQuestion; /* Question */
    /* Retrieve the Generated Answers */
    quizAnswer01Elm.innerText = quizAnswer01;
    quizAnswer02Elm.innerText = quizAnswer02;
    quizAnswer03Elm.innerText = quizAnswer03;
    quizAnswer04Elm.innerText = quizAnswer04;
    /* Keep the Latest Selection */
    if (answerSelected === 1) {
      buttonStep02Elm.classList.add("buttonUnlocked");
      for (let i = 0; i < quizAnswerElm.length; i++) {
        if (quizAnswerElm[i].innerText === answerSelectedValue) {
          if (answerSelectedValue === correctAnswer) {
            quizAnswerElm[i].classList.add(
              "quizAnswerCorrect"
            ); /* The Selected Answer Was Correct */
          } else {
            quizAnswerElm[i].classList.add(
              "quizAnswerWrong"
            ); /* The Selected Answer Was Wrong */
          }
        } else if (quizAnswerElm[i].innerText !== answerSelectedValue) {
          if (quizAnswerElm[i].innerText === correctAnswer) {
            quizAnswerElm[i].classList.add("quizAnswerCorrect");
          } else {
            quizAnswerElm[i].classList.add("quizAnswerWrong");
          }
        }
      }
    }
  }

  /* Proceed to Next Question */
  buttonStep02Elm.addEventListener("click", () => {
    buttonStep02Elm.classList.remove("buttonUnlocked");
    /* Proceed to Results */
    if (questionCounter === 11) {
      buttonStep02Elm.innerHTML = "Proceed to Results";
    } else if (questionCounter === 12) {
      gameStep03();
    }
    /* Generate Next Question + Answers */
    if (answerSelected === 1) {
      if (questionCounter !== 12) {
        questionCounter++;
        sessionStorage.questionCounter = JSON.stringify(questionCounter);
        generateAnswers();
        answerSelected = 0;
        answerSelectedValue = "NONE";
        sessionStorage.answerSelected = JSON.stringify(answerSelected);
        sessionStorage.answerSelectedValue =
          JSON.stringify(answerSelectedValue);
        /* Reset Click Counter */
        answerClickCounter = 0;
      }
    } else {
      alert("Select an answer before moving to another question");
      return;
    }
  });

  /* Select an Answer */
  for (let i = 0; i < quizAnswerElm.length; i++) {
    quizAnswerElm[i].addEventListener("click", () => {
      if (answerSelected === 0) {
        buttonStep02Elm.classList.add("buttonUnlocked");
        answerSelected = 1;
        answerSelectedValue = quizAnswerElm[i].innerText;
        sessionStorage.answerSelected = JSON.stringify(answerSelected);
        sessionStorage.answerSelectedValue =
          JSON.stringify(answerSelectedValue);
        answerClickCounter++;
        if (answerClickCounter === 1) {
          if (quizAnswerElm[i].innerText === correctAnswer) {
            /* The Answer Is Correct */
            quizAnswerElm[i].classList.add("quizAnswerCorrect");
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
            /* Push the Answer to the Storage */
            answersStorage.push({
              number: parameter01QuestionNrElm.innerText,
              country: parameter02CountryElm.innerText,
              topic: parameter03TopicElm.innerText,
              answer: quizAnswerElm[i].innerText,
              status: "wrong",
            });
          }
          sessionStorage.answers = JSON.stringify(answersStorage);
          addAnswerClass();
        }
      }
    });
  }
}

/* Step 3: Results */
function gameStep03() {
  gameStep = "step03";
  sessionStorage.gameStep = JSON.stringify(gameStep);

  document.getElementById("sectionGameStep01").style.display = "none";
  document.getElementById("sectionGameStep02").style.display = "none";
  document.getElementById("sectionGameStep03").style.display = "block";

  /* Update Player Score and Display Points */
  scorePlayer = points;
  updateScore();

  /* Set Timer back to default */
  timeLeft = "–";
  timeElm.innerText = timeLeft;

  /* HTML Element: Header */
  const sectionHeaderElm = document.createElement("div");
  sectionHeaderElm.classList.add("sectionHeader");
  sectionHeaderElm.innerHTML = "Results of the Game";
  sectionGameStep03Elm.appendChild(sectionHeaderElm);
  /* HTML Element: Results Headlines */
  const resultsHeadlinesElm = document.createElement("div");
  resultsHeadlinesElm.classList.add("resultsHeadlines");
  /* HTML Element: Headline: Question Number */
  const resultHeadline01Elm = document.createElement("div");
  resultHeadline01Elm.classList.add("resultHeadline");
  resultHeadline01Elm.innerHTML = "Question";
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

  /* Display Results Dynamically */
  for (let i = 0; i < 12; i++) {
    /* Add Value Dynamically: Question Number */
    const resultQuestionElm = document.createElement("div");
    let resultQuestionNameElm =
      "resultQuestion" + i; /* Dynamically Create an Id */
    resultQuestionElm.classList.add("resultValue");
    resultQuestionElm.setAttribute("id", resultQuestionNameElm);
    resultQuestionElm.innerText = answersStorage[i].number;
    resultsListElm.appendChild(resultQuestionElm);
    /* Add Value Dynamically: Country */
    const resultCountryElm = document.createElement("div");
    let resultCountryNameElm =
      "resultCountry" + i; /* Dynamically Create an Id */
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
    gameStep = "step01";
    sessionStorage.clear();
    location.reload();
  });
}

function retrieveData() {
  /* LOCAL STORAGE */
  /* Player */
  if (localStorage.getItem("currentPlayer") !== null) {
    currentPlayer = JSON.parse(localStorage.getItem("currentPlayer"));
    if (currentPlayer !== "NONE") {
      updatePlayer();
    }
  }
  /* Player/Highest Score  */
  if (localStorage.getItem("scorePlayer") !== null) {
    scorePlayer = JSON.parse(localStorage.getItem("scorePlayer"));
    scoreHighest = JSON.parse(localStorage.getItem("scoreHighest"));
    updateScore();
  }

  /* SESSION STORAGE */
  /* Latest Screen */
  if (sessionStorage.getItem("gameStep") !== null) {
    gameStep = JSON.parse(sessionStorage.getItem("gameStep"));
  }
  /* Game Timer */
  if (sessionStorage.getItem("timeLeft") !== null) {
    timeLeft = JSON.parse(sessionStorage.getItem("timeLeft"));
  }
  /* Points */
  if (sessionStorage.getItem("points") !== null) {
    points = JSON.parse(sessionStorage.getItem("points"));
    pointsElm.innerText = points;
    jokerCounter = JSON.parse(sessionStorage.getItem("jokerCounter"));
  }
  /* Selected Countries */
  if (sessionStorage.getItem("countriesSelected") !== null) {
    countriesSelected = JSON.parse(sessionStorage.getItem("countriesSelected"));
    indexSelected = JSON.parse(sessionStorage.getItem("indexSelected"));
    for (let x = 1; x <= indexSelected; x++) {
      selectCountries(x);
    }
  }
  /* Question Counter */
  if (sessionStorage.getItem("questionCounter") !== null) {
    questionCounter = JSON.parse(sessionStorage.getItem("questionCounter"));
    firstQuestionGenerated = JSON.parse(
      sessionStorage.getItem("firstQuestionGenerated")
    );
  }
  /* Answers */
  if (sessionStorage.getItem("answers") !== null) {
    answersStorage = JSON.parse(sessionStorage.getItem("answers"));
  }
  /* Latest Selection */
  if (sessionStorage.getItem("answerSelected") !== null) {
    answerSelected = JSON.parse(sessionStorage.getItem("answerSelected"));
    answerSelectedValue = JSON.parse(
      sessionStorage.getItem("answerSelectedValue")
    );
  }
  if (sessionStorage.getItem("questionCounter") !== null) {
    /* Generated Parameters */
    questionCounter = JSON.parse(sessionStorage.getItem("questionCounter"));
    parameterCountry = JSON.parse(sessionStorage.getItem("parameterCountry"));
    parameterTopic = JSON.parse(sessionStorage.getItem("parameterTopic"));
    quizQuestion = JSON.parse(sessionStorage.getItem("quizQuestion"));
    /* Generated Answers */
    quizAnswer01 = JSON.parse(sessionStorage.getItem("quizAnswer01"));
    quizAnswer02 = JSON.parse(sessionStorage.getItem("quizAnswer02"));
    quizAnswer03 = JSON.parse(sessionStorage.getItem("quizAnswer03"));
    quizAnswer04 = JSON.parse(sessionStorage.getItem("quizAnswer04"));
    /* Correct Answer */
    correctAnswer = JSON.parse(sessionStorage.getItem("correctAnswer"));
  }
  /* Jokers */
  if (sessionStorage.getItem("jokersAvailable") !== null) {
    jokersAvailable = JSON.parse(sessionStorage.getItem("jokersAvailable"));
    actionJoker();
  }
}

let gameStep = "step01"; /* Default Game Step Is Step01 */
window.addEventListener("load", () => {
  /* Retrieve Data from Local/Session Storage */
  retrieveData();

  /* Set Game Screen */
  if (gameStep === "step01") {
    gameStep01();
  } else if (gameStep === "step02") {
    gameStep02();
  } else if (gameStep === "step03") {
    gameStep03();
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
      localStorage.currentPlayer = JSON.stringify(currentPlayer);
      /* Call Function to Add/Delete Player */
      updatePlayer();
      /* Clear Player Input */
      playerInputElement.value = "";
    } else if (currentPlayer !== "NONE") {
      /* Prevent Adding Another Player */
      alert(
        "The player has been added already. Delete the current player before adding a new one."
      );
      return;
    }
  });
});
