export function rps(shot){
const moves = ['rock', 'paper', 'scissors'];
if(shot == undefined){
    return {'player': moves[Math.floor(Math.random() * moves.length)]};
}
shot = shot.toLowerCase();
if(!moves.includes(shot)){
    return error;
}
let opMove;
opMove = moves[Math.floor(Math.random()*moves.length)];
if(opMove === shot){
    return {'player': shot, 'opponent': opMove, 'result': 'tie'};
}
if(shot === 'rock' && opMove === 'paper' || shot === 'paper' && opMove === 'scissors' || shot === 'scissors' && opMove === 'rock'){
    return {'player': shot, 'opponent': opMove, 'result': 'lose'};
} else {
    return {'player': shot, 'opponent': opMove, 'result': 'win'};
}

}

export function rpsls(shot){
const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
if(shot == undefined){
    return {'player': moves[Math.floor(Math.random() * moves.length)]};
}
shot = shot.toLowerCase();
let opMove;
opMove = moves[Math.floor(Math.random()*moves.length)];
if(opMove == shot){
    return {'player': shot, 'opponent': opMove, 'result': 'tie'};
}
if(
    (shot === 'scissors' && opMove === 'paper' || opMove === 'lizard')
    (shot === 'paper' && opMove === 'paper' || opMove === 'spock')
    (shot === 'rock' && opMove === 'lizard' || opMove === 'scissors')
    (shot === 'spock' && opMove === 'scissors' || opMove === 'rock')
    (shot === 'lizard' && opMove === 'spock' || opMove === 'paper')
    ){
        return {'player': shot, 'opponent': opMove, 'result': 'win'};
    } else {
        return {'player': shot, 'opponent': opMove, 'result': 'lose'};
    }
}
