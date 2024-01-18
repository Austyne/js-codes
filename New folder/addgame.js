const addGame = async () => {
    // Get the values from the form inputs
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const rating = parseInt(document.getElementById("rating").value);

    // Create a game object with the input values
    const game = { name, type, rating };

    // Send a POST request to the backend endpoint
    const response = await fetch("http://localhost:3000/games", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
    });

    // Update the status element with a message indicating that the game has been added
    document.getElementById("status").innerHTML = `${game.name} has been added to the backend`;
};

// Add an event listener to the form to prevent its default behavior and call addGames function
document.getElementById("add-game-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    addGame(); // Call the addGames function
});
