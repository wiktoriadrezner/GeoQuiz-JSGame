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

function gameStep01() {
    /* Button to Continue */
    const buttonContinueElement = document.querySelector("#buttonContinue");
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
                }
            }
        });
    }
    buttonContinueElement.addEventListener("click", () => {
        if (indexSelected === 3) {
            console.log("button works");
        }
    });
}

function game() {
    /* Step 1: Select 3 Countries */
    gameStep01();
    /* Step 2: Begin Quiz */
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
