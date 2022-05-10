let currentPlayer = "NONE";
function actionPlayer(valuePlayer) {
  /* Define Player Element */
  const playerElement = document.querySelector("#player");
  const playerInputElement = document.createElement("div");
  playerInputElement.classList.add("playerInput");
  playerInputElement.innerText = valuePlayer;
  playerElement.appendChild(playerInputElement);
  const playerDeleteElement = document.createElement("button");
  playerDeleteElement.classList.add("playerDelete");
  playerDeleteElement.innerHTML = "❌";
  playerElement.appendChild(playerDeleteElement);

  playerDeleteElement.addEventListener("click", () => {
    /* Delete Current Player */
    playerElement.removeChild(playerInputElement);
    playerElement.removeChild(playerDeleteElement);
    /* Set Current Player to NONE */
    currentPlayer = "NONE";
  });
}

let scorePlayer = 100;
let scoreHighest = 3500;
function actionScore() {
  const scorePlayerElement = document.querySelector("#scorePlayer");
  const scorePlayerValueElement = document.createElement("div");
  scorePlayerValueElement.classList.add("scorePlayerValue");
  const scoreHighestElement = document.querySelector("#scoreHighest");
  const scoreHighestValueElement = document.createElement("div");
  scoreHighestValueElement.classList.add("scoreHighestValue");
}

//  <!-- Current Score -->
//         <div class="sectionHeader">Score</div>
//         <div id="scorePlayer">
//           <div class="scoreText">Your Score:</div>
//           <div class="scorePlayerValue">Score Here</div>
//         </div>
//         <!-- Highest Score -->
//         <div id="scoreHighest">
//           <div class="scoreText">Highest Score:</div>
//           <div class="scoreHighestValue">Highest Score Here</div>
//         </div>

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

  jokerAvailableElement.addEventListener("click", () => {
    /* Purchase an Available Joker */
    jokersAvailableElement.removeChild(jokerAvailableElement);
    /* Add a Joker to Purchased */
    jokersPurchasedElement.appendChild(jokerPurchasedElement);
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
      actionPlayer(currentPlayer);
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

  /* Joker */
  for (i = 0; i < 15; i++) {
    /* Add a Joker if Player Answered 4/8/12 Questions Correctly */
    if ([4, 8, 12].includes(answersCorrect)) {
      actionJoker();
    }
    answersCorrect++;
  }
});
