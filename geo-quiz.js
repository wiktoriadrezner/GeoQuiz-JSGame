let indexSelected = 0;
let countriesSelected = [];
function actionCountry() {
    /* Country 1 */
    if (indexSelected === 1) {
        const country01Element = document.querySelector("#country01");
        let country01ValueElement = document.createElement("div");
        country01ValueElement.setAttribute("id", "country01Value");
        country01ValueElement.innerText = countriesSelected[0];
        country01Element.appendChild(country01ValueElement);
    }
    /* Country 2 */
    if (indexSelected === 2) {
        const country02Element = document.querySelector("#country02");
        let country02ValueElement = document.createElement("div");
        country02ValueElement.setAttribute("id", "country02Value");
        country02ValueElement.innerText = countriesSelected[1];
        country02Element.appendChild(country02ValueElement);
    }
    /* Country 3 */
    if (indexSelected === 3) {
        const country03Element = document.querySelector("#country03");
        let country03ValueElement = document.createElement("div");
        country03ValueElement.setAttribute("id", "country03Value");
        country03ValueElement.innerText = countriesSelected[2];
        country03Element.appendChild(country03ValueElement);
    }
}

let currentPlayer = "NONE";
function actionPlayer(valuePlayer) {
    /* Player */
    const playerElement = document.querySelector("#player");
    const playerInputElement = document.createElement("div");
    playerInputElement.classList.add("playerInput");
    playerInputElement.innerText = valuePlayer;
    playerElement.appendChild(playerInputElement);
    const playerDeleteElement = document.createElement("button");
    playerDeleteElement.classList.add("playerDelete");
    playerDeleteElement.innerHTML = "❌";
    playerElement.appendChild(playerDeleteElement);
    /* Delete Current Player */
    playerDeleteElement.addEventListener("click", () => {
        playerElement.removeChild(playerInputElement);
        playerElement.removeChild(playerDeleteElement);
        /* Set Current Player to NONE */
        currentPlayer = "NONE";
    });
}

let scorePlayer = 0;
let scoreHighest = 0;
function actionScore() {
    /* Player Score */
    const scorePlayerElement = document.querySelector("#scorePlayer");
    const scorePlayerValueElement = document.createElement("div");
    scorePlayerValueElement.classList.add("scorePlayerValue");
    scorePlayerValueElement.innerText = scorePlayer;
    scorePlayerElement.appendChild(scorePlayerValueElement);
    /* Highest Score */
    const scoreHighestElement = document.querySelector("#scoreHighest");
    const scoreHighestValueElement = document.createElement("div");
    scoreHighestValueElement.classList.add("scoreHighestValue");
    scoreHighestValueElement.innerText = scoreHighest;
    scoreHighestElement.appendChild(scoreHighestValueElement);
}

let answersCorrect = 0;
let answersWrong = 0;
function actionJoker() {
    /* Jokers Available */
    const jokersAvailableElement = document.querySelector("#jokersAvailable");
    const jokerAvailableElement = document.createElement("div");
    jokerAvailableElement.setAttribute("id", "jokerAvailable");
    jokerAvailableElement.innerHTML = "⏱️";
    /* Add an Available Joker */
    jokersAvailableElement.appendChild(jokerAvailableElement);
    /* Jokers Purchased */
    const jokersPurchasedElement = document.querySelector("#jokersPurchased");
    const jokerPurchasedElement = document.createElement("div");
    jokerPurchasedElement.setAttribute("id", "jokerPurchased");
    jokerPurchasedElement.innerHTML = "⏱️";
    /* Purchase an Available Joker */
    jokerAvailableElement.addEventListener("click", () => {
        /* Delete Joker From Available List */
        jokersAvailableElement.removeChild(jokerAvailableElement);
        /* Add a Joker to Purchased */
        jokersPurchasedElement.appendChild(jokerPurchasedElement);
    });
}

/* Step 1: Select Countries */
function gameStep01() {
    /* Append HTML Elements to Section */
    const sectionGameStep01Element = document.querySelector("#sectionGameStep01");
    /* HTML Element: Header */
    const sectionHeaderElement = document.createElement("div");
    sectionHeaderElement.classList.add("sectionHeader");
    sectionHeaderElement.innerHTML = "Select / 3 / Countries";
    sectionGameStep01Element.appendChild(sectionHeaderElement);
    /* HTML Element: Country Selection — Text */
    const countrySelectionTextBoldElement = document.createElement("div");
    countrySelectionTextBoldElement.classList.add("countrySelectionTextBold");
    countrySelectionTextBoldElement.innerHTML = "ATTENTION:";
    sectionGameStep01Element.appendChild(countrySelectionTextBoldElement);
    /* HTML Element: Country Selection — Text Bold */
    const countrySelectionTextElement = document.createElement("div");
    countrySelectionTextElement.classList.add("countrySelectionText");
    countrySelectionTextElement.innerHTML = "Once selected a country, you can't change your selection.";
    sectionGameStep01Element.appendChild(countrySelectionTextElement);
    /* HTML Element: Country Selection */
    const countrySelectionElement = document.createElement("div");
    countrySelectionElement.classList.add("countrySelection");
    sectionGameStep01Element.appendChild(countrySelectionElement);
    /* HTML Element: Country — Azerbaijan */
    const countryAzerbaijanElement = document.createElement("div");
    countryAzerbaijanElement.classList.add("countryName");
    countryAzerbaijanElement.innerHTML = "Azerbaijan";
    countrySelectionElement.appendChild(countryAzerbaijanElement);
    /* HTML Element: Country — Australia */
    const countryAustraliaElement = document.createElement("div");
    countryAustraliaElement.classList.add("countryName");
    countryAustraliaElement.innerHTML = "Australia";
    countrySelectionElement.appendChild(countryAustraliaElement);
    /* HTML Element: Country — Belarus */
    const countryBelarusElement = document.createElement("div");
    countryBelarusElement.classList.add("countryName");
    countryBelarusElement.innerHTML = "Belarus";
    countrySelectionElement.appendChild(countryBelarusElement);
    /* HTML Element: Country — Bulgaria */
    const countryBulgariaElement = document.createElement("div");
    countryBulgariaElement.classList.add("countryName");
    countryBulgariaElement.innerHTML = "Bulgaria";
    countrySelectionElement.appendChild(countryBulgariaElement);
    /* HTML Element: Country — Canada */
    const countryCanadaElement = document.createElement("div");
    countryCanadaElement.classList.add("countryName");
    countryCanadaElement.innerHTML = "Canada";
    countrySelectionElement.appendChild(countryCanadaElement);
    /* HTML Element: Country — Colombia */
    const countryColombiaElement = document.createElement("div");
    countryColombiaElement.classList.add("countryName");
    countryColombiaElement.innerHTML = "Colombia";
    countrySelectionElement.appendChild(countryColombiaElement);
    /* HTML Element: Country — Denmark */
    const countryDenmarkElement = document.createElement("div");
    countryDenmarkElement.classList.add("countryName");
    countryDenmarkElement.innerHTML = "Denmark";
    countrySelectionElement.appendChild(countryDenmarkElement);
    /* HTML Element: Country — Ecuador */
    const countryEcuadorElement = document.createElement("div");
    countryEcuadorElement.classList.add("countryName");
    countryEcuadorElement.innerHTML = "Ecuador";
    countrySelectionElement.appendChild(countryEcuadorElement);
    /* HTML Element: Country — Finland */
    const countryFinlandElement = document.createElement("div");
    countryFinlandElement.classList.add("countryName");
    countryFinlandElement.innerHTML = "Finland";
    countrySelectionElement.appendChild(countryFinlandElement);
    /* HTML Element: Country — Ghana */
    const countryGhanaElement = document.createElement("div");
    countryGhanaElement.classList.add("countryName");
    countryGhanaElement.innerHTML = "Ghana";
    countrySelectionElement.appendChild(countryGhanaElement);
    /* HTML Element: Country — Iceland */
    const countryIcelandElement = document.createElement("div");
    countryIcelandElement.classList.add("countryName");
    countryIcelandElement.innerHTML = "Iceland";
    countrySelectionElement.appendChild(countryIcelandElement);
    /* HTML Element: Country — Kazakhstan */
    const countryKazakhstanElement = document.createElement("div");
    countryKazakhstanElement.classList.add("countryName");
    countryKazakhstanElement.innerHTML = "Kazakhstan";
    countrySelectionElement.appendChild(countryKazakhstanElement);
    /* HTML Element: Country — Lithuania */
    const countryLithuaniaElement = document.createElement("div");
    countryLithuaniaElement.classList.add("countryName");
    countryLithuaniaElement.innerHTML = "Lithuania";
    countrySelectionElement.appendChild(countryLithuaniaElement);
    /* HTML Element: Country — Moldova */
    const countryMoldovaElement = document.createElement("div");
    countryMoldovaElement.classList.add("countryName");
    countryMoldovaElement.innerHTML = "Moldova";
    countrySelectionElement.appendChild(countryMoldovaElement);
    /* HTML Element: Country — Pakistan */
    const countryPakistanElement = document.createElement("div");
    countryPakistanElement.classList.add("countryName");
    countryPakistanElement.innerHTML = "Pakistan";
    countrySelectionElement.appendChild(countryPakistanElement);
    /* HTML Element: Button to Continue */
    const buttonContinueElement = document.createElement("div");
    buttonContinueElement.setAttribute("id", "buttonContinue");
    buttonContinueElement.classList.add("buttonContinueLocked");
    buttonContinueElement.innerHTML = "Click to Continue";
    sectionGameStep01Element.appendChild(buttonContinueElement);

    /* Loop Through 15 Countries */
    const countryNameElement = document.querySelectorAll(".countryName");
    for (let i = 0; i < countryNameElement.length; i++) {
        countryNameElement[i].addEventListener("click", () => {
            if (currentPlayer === "NONE") {
                /* Do Not Proceed If Current Player is Not Selected */
                alert("Before choosing the countries for the game, please add the player.");
                return;
            } else if (indexSelected !== 3) {
                /* Select Only Three Elements */
                countryNameElement[i].classList.add("countryNameSelected");
                countriesSelected[indexSelected] = countryNameElement[i].innerText;
                indexSelected++;
                /* Set Countries List Based on Selection */
                actionCountry();
                /* If Three Countries Are Selected, Lock the Remaining Countries */
                if (indexSelected === 3) {
                    for (let i = 0; i < countryNameElement.length; i++) {
                        if (countryNameElement[i].classList.contains("countryNameSelected")) continue;
                        else {
                            countryNameElement[i].classList.add("countryNameLocked");
                        }
                    }
                    buttonContinueElement.classList.add("buttonContinueUnlocked");
                }
            }
        });
    }
    /* Proceed To Quiz */
    buttonContinueElement.addEventListener("click", () => {
        if (indexSelected !== 3) {
            alert("Before proceeding to game, please select the countries.");
            return;
        } else {
            gameStep02();
        }
    });
}
function gameStep02() {}

function game() {
    /* Step 1: Select Countries */
    gameStep01();
    /* Step 2: Quiz */
    /* Step 3: Results */
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
            actionPlayer(currentPlayer);
            /* Clear Player Input */
            playerInputElement.value = "";
        } else if (currentPlayer !== "NONE") {
            /* Prevent Adding Another Player */
            alert("The player has been added already. Delete the current player before adding a new one.");
            return;
        }
    });

    /* Start Game */
    game();

    /* Update Score */
    actionScore();

    /* Joker */
    for (i = 0; i < 15; i++) {
        /* Add a Joker if Player Answered 4/8/12 Questions Correctly */
        if ([4, 8, 12].includes(answersCorrect)) {
            actionJoker();
        }
        answersCorrect++;
    }
});
