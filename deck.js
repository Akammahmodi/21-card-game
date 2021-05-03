//Creating cardDeck;
let suits = ["Spades", "Hearts", "Diamonds", "Clubs"]; //array suits
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; //array values(ranks)
let deck = [];
let players = [];
let currentPlayer = 0;

//Creating a Deck
function createDeck()
{
    deck = [];
    for (let i = 0 ; i < values.length; i++)
    {
        for(let x = 0; x < suits.length; x++)
        {
            //Converting J,Q,K,A to a number(giving them a value)
            let weight = parseInt(values[i]);
            if (values[i] === "J" || values[i] === "Q" || values[i] === "K")
                weight = 10;
            if (values[i] === "A")
                weight = 11;
            let card = { Value: values[i], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
}
//Making players
function createPlayers(num)
{
    players = [];
    for(let i = 1; i <= num; i++)
    {
        let hand = [];
        let player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
        players.push(player);
    }
}

function createPlayersUI()
{
    document.getElementById('players').innerHTML = '';
    for(let i = 0; i < players.length; i++)
    {
        let div_player = document.createElement('div');
        let div_playerid = document.createElement('div');
        let div_hand = document.createElement('div');
        let div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;

        div_playerid.innerHTML = 'Player ' + players[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
    }
}
//Making the shuffle
function shuffle()
{
    // for 1000 turns
    // switch the values of two random cards
    for (let i = 0; i < 1000; i++)
    {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}
