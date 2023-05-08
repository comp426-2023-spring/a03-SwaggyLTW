export function rps(shot){
const moves = ['rock', 'paper', 'scissors'];

opMove = moves[Math.floor(Math.random()*moves.length)];

if(shot == 'rock' && opMove == 'paper' || shot == 'paper' && opMove == 'scissors' || shot == scissors && opMove == rock){
    return(shot + " does not beat " + opMove + "." + "  You lose :(");
} else {
    return(shot + " beats " + opMove + "!" + "  You win :)");
}

}

export function rpsls(shot){
const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
opMove = moves[Math.floor(Math.random()*moves.length)];
if(
    (shot == 'scissors' && (opMove == ('paper' || 'lizard')))
    (shot == 'paper' && (opMove == ('paper' || 'spock')))
    (shot == 'rock' && (opMove == ('lizard' || 'scissors')))
    (shot == 'spock' && (opMove == ('scissors' || 'rock')))
    (shot == 'lizard' && (opMove == ('spock' || 'paper')))
    ){
        return(shot + " beats " + opMove + "!" + "  You win :)");
    } else {
        return(shot + " does not beat " + opMove + "." + "  You lose :(");
    }
}
