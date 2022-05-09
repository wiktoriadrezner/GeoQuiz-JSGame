let currentPlayer;

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
        /* Check Whether Player Name is Entered */
        if (!playerInputElement.value) {
            alert("Please, enter player name");
            return;
        }
        /* Call Function to Add Player */
        addPlayer(playerInputElement.value);
        currentPlayer = playerInputElement.value;
        console.log(currentPlayer);
        /* Clear Player Input */
        playerInputElement.value = "";
    });
});
