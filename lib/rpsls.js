export function rps(shot){
const moves = ['rock', 'paper', 'scissors'];

let opMove;
opMove = moves[Math.floor(Math.random()*moves.length)];
if(opMove == shot){
    return {'player': shot, 'opponent': opponent, 'result': 'tie'};
}
if(shot == 'rock' && opMove == 'paper' || shot == 'paper' && opMove == 'scissors' || shot == 'scissors' && opMove == 'rock'){
    return {'player': shot, 'opponent': opponent, 'result': 'lose'};
} else {
    return {'player': shot, 'opponent': opponent, 'result': 'win'};
}

}

export function rpsls(shot){
const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let opMove;
opMove = moves[Math.floor(Math.random()*moves.length)];
if(opMove == shot){
    return {'player': shot, 'opponent': opponent, 'result': 'tie'};
}
if(
    (shot === 'scissors' && (opMove === ('paper' || 'lizard')))
    (shot === 'paper' && (opMove === ('paper' || 'spock')))
    (shot === 'rock' && (opMove === ('lizard' || 'scissors')))
    (shot === 'spock' && (opMove === ('scissors' || 'rock')))
    (shot === 'lizard' && (opMove === ('spock' || 'paper')))
    ){
        return {'player': shot, 'opponent': opponent, 'result': 'win'};
    } else {
        return {'player': shot, 'opponent': opponent, 'result': 'lose'};
    }
}
