const games = [
    {name: "GTA V" , type : "open world", rating: 5, isFavourite : true},
    {name: "Call of duty" , type : "fps", rating: 5, isFavourite : true},
    {name: "pes 2023" , type : "football", rating: 4, isFavourite : true},
    {name: "super mario" , type : "arcade", rating: 4, isFavourite : false},
    {name: "Grand Turismo" , type : "car racing", rating: 3, isFavourite : false},
    {name: "EA FC24" , type : "footbal", rating: 2, isFavourite : false},
    {name: "MK 1" , type : "Arcade", rating: 10, isFavourite : true}
  ]
  const toString= ()=> {
  
  }
  const PrintAllGame = (games) => {
    games
    .forEach(
      (game) => {
      addStatus(`Name: ${game.name} - Type: ${game.type} - Rating: ${game.rating} - Favourite: ${game.isFavourite}`);
    });
  };
  
  PrintAllGame(games);
  
  
  addStatus("Some Statistics....");
  const getAverageRating = () =>{
    let sum = 0;
    games.forEach((game) => {sum += game.rating})
    
   addStatus(`Average rating = ${(sum/ games.length).toFixed(2)}`)
  }
  getAverageRating();
  
  const getHighestRating = () => {
    if (games.length === 0) {
      addStatus("Game list is empty");
    } else {
      let maxRating = games[0];
  
      games.forEach((game) => {
        if (game.rating > maxRating.rating) {
          maxRating = game;
        }
      });
      return maxRating.name;
    }
  };
  const isHighestRated = () => {
      addStatus(`${getHighestRating()} is the game with the highest rating`)
  }
  isHighestRated()
  
  
  addStatus("Here are a list of the favourite games");
  const printFavourite = () => {
    games.forEach((game)=>{
      game.isFavourite == true ? addStatus(`${game.name}`): null;
    })
  }
  printFavourite();
  
  addStatus("First 2 games:");
  const firstTwoGames = games.slice(0, 2);
  
  for (const game of firstTwoGames) {
    addStatus(`${game.name}`);
  }
  addStatus("friend's game:")
  const friendgames = [
    {name: "GTA Vi" , type : "open world", rating: 5, isFavourite : true},
    {name: "CODM" , type : "fps", rating: 5, isFavourite : true},
    {name: "efootball" , type : "football", rating: 4, isFavourite : true},
    {name: "EA FC24" , type : "footbal", rating: 2, isFavourite : false},
    {name: "MK x" , type : "Arcade", rating: 10, isFavourite : true}
  ]
  PrintAllGame(friendgames);
  const allGames = [...games, ...friendgames]
  addStatus("All games:")
  PrintAllGame(allGames);
  
  addStatus("These are the games with a rating higher than 3:");
  
  const ratingAboveThree = (games, rating) => {
    games
      .filter((game) => game.rating > rating)
      .forEach((object) => {
        addStatus(`Name: ${object.name} - Type: ${object.type} - Rating: ${object.rating} `);
      });
  };
  ratingAboveThree(games, 3);
  friendgames.name[games];
  