function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

/* Helper function to combine all players */
function allPlayers() {
    const game = gameObject();
    return Object.assign({}, game.home.players, game.away.players);
}


   //3.1 Retrieve Player Information
 

function numPointsScored(playerName) {
    return allPlayers()[playerName].points;
}

function shoeSize(playerName) {
    return allPlayers()[playerName].shoe;
}


   //3.2 Retrieve Team Information

function teamColors(teamName) {
    const game = gameObject();
    for (let side in game) {
        if (game[side].teamName === teamName) {
            return game[side].colors;
        }
    }
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

  // 3.3 Retrieve Player Numbers and Stats

function playerNumbers(teamName) {
    const game = gameObject();
    for (let side in game) {
        if (game[side].teamName === teamName) {
            return Object.values(game[side].players).map(player => player.number);
        }
    }
}

function playerStats(playerName) {
    return allPlayers()[playerName];
}


   //3.4 Advanced Challenge


function bigShoeRebounds() {
    let biggest = 0;
    let rebounds = 0;

    for (let [player, stats] of Object.entries(allPlayers())) {
        if (stats.shoe > biggest) {
            biggest = stats.shoe;
            rebounds = stats.rebounds;
        }
    }
    return rebounds;
}

   //BONUS FUNCTIONS


function mostPointsScored() {
    let max = 0;
    let name = "";

    for (let [player, stats] of Object.entries(allPlayers())) {
        if (stats.points > max) {
            max = stats.points;
            name = player;
        }
    }
    return name;
}

function winningTeam() {
    const game = gameObject();

    const homeTotal = Object.values(game.home.players)
        .reduce((sum, p) => sum + p.points, 0);

    const awayTotal = Object.values(game.away.players)
        .reduce((sum, p) => sum + p.points, 0);

    return homeTotal > awayTotal ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    let longest = "";
    for (let player in allPlayers()) {
        if (player.length > longest.length) {
            longest = player;
        }
    }
    return longest;
}


  // SUPER BONUS


function doesLongNameStealATon() {
    const longest = playerWithLongestName();
    const longestSteals = allPlayers()[longest].steals;

    let maxSteals = 0;

    for (let stats of Object.values(allPlayers())) {
        if (stats.steals > maxSteals) {
            maxSteals = stats.steals;
        }
    }

    return longestSteals === maxSteals;
}
