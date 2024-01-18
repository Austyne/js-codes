const games = [];
const Table = document.createElement("table");
const tableHead = document.createElement("thead");
const tableRow = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const tableBody = document.createElement("tbody");

Table.appendChild(tableHead);
Table.appendChild(tableBody).id = "my-games-table-body";

tableHead.appendChild(tableRow);
tableRow.appendChild(th1).innerHTML = "Name";
tableRow.appendChild(th2).innerHTML = "Type";
tableRow.appendChild(th3).innerHTML = "Rating";

document.querySelector("main").appendChild(Table);

const Div = document.createElement("div");
const h3 = document.createElement("h3");

h3.innerHTML = "Status";
Div.id = "status";

Div.appendChild(h3);
document.querySelector("main").appendChild(Div);

// back end
const fetchGames = async () => {
    const response = await fetch("http://localhost:3000/games");
    const result = await response.json();
    games.push(...result);
}

const renderGames = () => {
    clearTableRows({ tableBody: "my-games-table-body" });

    // Get the rating filter value
    const ratingFilter = parseInt(document.getElementById("rating-filter").value);

    // Get the name filter value
    const nameFilter = document.getElementById("nfilter").value.toLowerCase();

    // Check if a valid rating filter value is provided
    const shouldFilterRating = !isNaN(ratingFilter);
    games.forEach((game) => {
        // If no rating filter value is provided or the game's rating satisfies the filter
        // Also, check if the name includes the filter value
        if ((!shouldFilterRating || (shouldFilterRating && game.rating > ratingFilter)) &&
            (!nameFilter || game.name.toLowerCase().includes(nameFilter))) {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.innerHTML = game.name;
            const typeCell = document.createElement("td");
            typeCell.innerHTML = game.type;
            const ratingCell = document.createElement("td");
            ratingCell.innerHTML = game.rating;

            row.appendChild(nameCell);
            row.appendChild(typeCell);
            row.appendChild(ratingCell);

            tableBody.appendChild(row);

            row.addEventListener("click", () => {
                clearStatus();
                addStatus(`Name: ${game.name} - Type: ${game.type} - Rating: ${game.rating}`);
            });
        }
    });
};

// Add event listener to update the filtered games when the rating input changes
document.getElementById("rating-filter").addEventListener("input", renderGames);

// Add event listener for the filter button click
document.getElementById("filter-name").addEventListener("click", renderGames);


const fetchAndRenderGames = async () => {
    await fetchGames();
    renderGames();
}

fetchAndRenderGames();

Div.addEventListener("mouseover", () => { Div.style.backgroundColor = "red"; });
Div.addEventListener("mouseout", () => { Div.style.backgroundColor = ""; });
Div.addEventListener("mouseover", () => { Div.style.color = "black"; });
