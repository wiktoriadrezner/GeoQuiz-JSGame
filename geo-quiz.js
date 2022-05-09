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
});
