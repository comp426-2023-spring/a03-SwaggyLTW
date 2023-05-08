export function rps(shot){
const moves = ['rock', 'paper', 'scissors'];

opMove = moves[Math.floor(Math.random()*moves.length)];

if(shot == 'rock' && opMove == 'paper' || shot == 'paper' && opMove == 'scissors' || shot == scissors && opMove == rock){
    return(shot + " does not beat " + opMove + "." + "  You lose :(");
} else {
    return(shot + " beats " + opMove + "!" + "  You win :)");
}

}

