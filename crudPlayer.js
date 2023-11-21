const { get } = require("http");

const POSITIONS = ['Goleiro', 'Zagueiro', 'Lateral', 'Volante', 'Meia', 'Atacante'];

let players = {}

function createPlayer(createInput){
    
    let completeInput = createInput.id && createInput.name && createInput.age && createInput.position && createInput.number;
    let validPosition = POSITIONS.includes(createInput.position); 
    
    if(!completeInput) throw new Error('Input incomplete');
    if(!validPosition) throw new Error('Invalid position');

    let newPlayer = {
        name: createInput.name,
        age: createInput.age,
        position: createInput.position,
        number: createInput.number
    }

    players[createInput.id] = newPlayer
    
}

function deletePlayerById(playerId){
    if(!players[playerId]) throw new Error('Player not found');
    delete players[playerId]
}

function getPlayerById(playerId){
    if(!players[playerId]) throw new Error('Player not found');
    return players[playerId]
}

function getPlayers(){
    if(Object.keys(players).length === 0) throw new Error('No players registered');
    return players
}

function updatePlayer(updateInput){
    if(!players[playerId]) throw new Error('Player not found');
    players[updateInput.id] = updateInput
}


module.exports = {
    createPlayer,
    deletePlayerById,
    getPlayerById,
    getPlayers,
    updatePlayer,
    players
}