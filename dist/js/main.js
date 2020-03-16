class Player {
    constructor(name, pos, team, app, goals, assists, gpm, ppm) {
        this.name = name
        this.pos = pos
        this.team = team
        this.app = app
        this.goals = goals
        this.assists = assists
        this.gpm = gpm
        this.ppm = ppm
    }
}

const getData = async () => {
    response = await axios.get(
        "http://localhost:3001/users"
    );
    assignData(response)
}


function assignData(response) {
    let name = response.data.players.map(player => {
        return `${player.player.name.first} ${player.player.name.last}`
    })

    let pos = response.data.players.map(player => {
        return player.player.info.position
    })

    let team = response.data.players.map(player => {
        return player.player.currentTeam.name
    })

    let app = response.data.players.map(player => {
        return player.stats[6].value
    })

    let goals = response.data.players.map(player => {
        return player.stats[0].value
    })

    let assists = response.data.players.map(player => {
        return player.stats[5].value
    })

    let gpm = response.data.players.map(player => {
        return Math.round(((player.stats[0].value) / (player.stats[6].value) + Number.EPSILON) * 100) / 100
    })

    let ppm = response.data.players.map(player => {
        return Math.round(((player.stats[4].value + player.stats[8].value) / player.stats[7].value + Number.EPSILON) * 100) / 100
    });



    player1 = new Player(name[0], pos[0], team[0], app[0], goals[0], assists[0], gpm[0], ppm[0]);
    player2 = new Player(name[1], pos[1], team[1], app[1], goals[1], assists[1], gpm[1], ppm[1]);
    player3 = new Player(name[2], pos[2], team[2], app[2], goals[2], assists[2], gpm[2], ppm[2]);
    player4 = new Player(name[3], pos[3], team[3], app[3], goals[3], assists[3], gpm[3], ppm[3]);
    player5 = new Player(name[4], pos[4], team[4], app[4], goals[4], assists[4], gpm[4], ppm[4]);



    console.log(this.player1);
    console.log(this.player2);
    console.log(this.player3);
    console.log(this.player4);
    console.log(this.player5);

}

function renderPlayerList() {

    let selectPlayer = document.getElementById("selectPlayer");
    console.log(response.data.players.length);
    len = response.data.players.length

    for (i = 0; i < (len - 1); i++) {
        let option = document.createElement('option');
        option.innerHTML = `${response.data.players[i].player.name.first} ${response.data.players[i].player.name.last}`
        option.value = i;
        selectPlayer.appendChild(option);
    }
}


function changeFunc() {

    let selectPlayer = document.getElementById("selectPlayer");
    var selectedValue = selectPlayer.options[selectPlayer.selectedIndex].value;

    console.log(selectedValue);

    if (selectedValue === "0") {
        console.log(player1.name);
        let avatar = "assets/p4916.png"
        let club = "assets/Spurs.png"
        showStats(player1, avatar, club)
    }
    else if (selectedValue === "1") {
        console.log(player2.name);
        let avatar = "assets/p4148.png"
        let club = "assets/mancity.png"
        showStats(player2, avatar, club)
    }
    else if (selectedValue === "2") {
        console.log(player3.name);
        let avatar = "assets/p2064.png"
        let club = "assets/manunited.png"
        showStats(player3, avatar, club)
    }
    else if (selectedValue === "3") {
        console.log(player4.name);
        let avatar = "assets/p4246.png"
        let club = "assets/arsenal.png"
        showStats(player4, avatar, club)
    }
    else if (selectedValue === "4") {
        console.log(player5.name);
        let avatar = "assets/p8983.png"
        let club = "assets/leicester.png"
        showStats(player5, avatar, club)
    }
    else {
        console.log("Not working");
    }

}



function showStats(player, avatar, club) {
    console.log(player);
    console.log(avatar);

    let playerCard = document.getElementById("stats");
    playerCard.innerHTML = '';
    let playerName = document.createElement('h1');
    playerName.innerHTML = '';
    let playerPos = document.createElement('h2');
    playerPos.innerHTML = '';
    let playerTeam = document.createElement('p');
    playerTeam.innerHTML = '';

    let playerStats = document.createElement('ol');
    playerStats.innerHTML = '';

    let playerApp = document.createElement('li');
    playerApp.innerHTML = '';
    let playerGoals = document.createElement('li');
    playerGoals.innerHTML = '';
    let playerAssists = document.createElement('li');
    playerAssists.innerHTML = '';
    let playerGPM = document.createElement('li');
    playerGPM.innerHTML = '';
    let playerPPM = document.createElement('li');
    playerPPM.innerHTML = '';

    let playerImage = document.createElement('img');
    let playerContainer = document.getElementById('playerContainer')
    playerContainer.innerHTML = "";
    playerImage.src = avatar;
    playerContainer.appendChild(playerImage);

    let teamImage = document.createElement('img');
    let teamContainer = document.getElementById('teamContainer')
    teamContainer.innerHTML = '';
    teamImage.src = club;
    teamImage.className = "card-img";
    teamContainer.appendChild(teamImage);


    playerName.appendChild(document.createTextNode(player.name));
    playerPos.appendChild(document.createTextNode(position(player.pos)));
    playerTeam.appendChild(document.createTextNode(player.team));

    playerApp.appendChild(document.createTextNode(`Appearences ${player.app}`));
    playerGoals.appendChild(document.createTextNode(`Goals ${player.goals}`));
    playerAssists.appendChild(document.createTextNode(`Assists ${player.assists}`));
    playerGPM.appendChild(document.createTextNode(`Goals per match ${player.gpm}`));
    playerPPM.appendChild(document.createTextNode(`Passes per minute ${player.ppm}`));

    playerStats.appendChild(playerApp)
    playerStats.appendChild(playerGoals)
    playerStats.appendChild(playerAssists)
    playerStats.appendChild(playerGPM)
    playerStats.appendChild(playerPPM)

    playerCard.appendChild(playerName)
    playerCard.appendChild(playerPos)
    // playerCard.appendChild(playerTeam)
    playerCard.appendChild(playerStats)
}


function position(playerPos) {

    if (playerPos === "D") {
        return "Defender"
    }
    if (playerPos === "M") {
        return "Midfielder"
    }
    if (playerPos === "F") {
        return "Forward"
    }
    else {
        return "Goalkeeper"
    }
}

function renderPlayerList() {

    let selectPlayer = document.getElementById("selectPlayer");
    console.log(response.data.players.length);
    len = response.data.players.length

    for (i = 0; i < (len); i++) {
        let option = document.createElement('option');
        option.innerHTML = `${response.data.players[i].player.name.first} ${response.data.players[i].player.name.last}`
        option.value = i;
        selectPlayer.appendChild(option);
    }
}


