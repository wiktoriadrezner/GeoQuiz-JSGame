let currentPlayer = "NONE";

function addPlayer(valuePlayer) {
    const playerElement = document.querySelector("#player");
    const playerInputElement = document.createElement("div");
    playerInputElement.classList.add("playerInput");
    playerInputElement.innerText = valuePlayer;
    playerElement.appendChild(playerInputElement);
}

window.addEventListener("load", () => {
    /* Add a New Player */
    const playerFormElement = document.querySelector("#formAddPlayer");
    const playerInputElement = document.querySelector("#inputAddPlayer");
    playerFormElement.addEventListener("submit", (e) => {
        e.preventDefault();
        /* Check if the Player has been added */
        if (currentPlayer === "NONE") {
            /* Check Whether Player Name is Entered */
            if (!playerInputElement.value) {
                alert("Please, enter player name to continue");
                return;
            }
            /* Save Added Player to Current Player */
            currentPlayer = playerInputElement.value;
            /* Call Function to Add Player */
            addPlayer(currentPlayer);
            /* Clear Player Input */
            playerInputElement.value = "";
        } else if (currentPlayer !== "NONE") {
            alert("The current player has been already added");
            return;
        }
    });
});
