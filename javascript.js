// gets value of player from click
// computer randomly pick number from 0 to 2

let roundNumber=0;
let playerScore=0;
let computerScore=0;
let playerSelection=0;
let computerSelection=0;

function rock() {
    let playerSelection=0;
    let computerSelection=computerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection===computerSelection) {
        roundNumber+=1;
        drawResult();
    } else if (computerSelection===1) {
        computerScore+=1;
        roundNumber+=1;
        computerWIN();
    } else {
        playerScore+=1;
        roundNumber+=1;
        playerWIN();
    }
    roundUpdate();
    scoreUpdate();
    setTimeout(resultUpdate,1);
    clearTimeout(resultUpdate);
}

function paper() {
    let playerSelection=1;
    let computerSelection=computerChoice();
    console.log(computerSelection);
    if (playerSelection===computerSelection) {
        roundNumber+=1;
        drawResult();
    } else if (computerSelection===2) {
        computerScore+=1;
        roundNumber+=1;
        computerWIN();
    } else {
        playerScore+=1;
        roundNumber+=1;
        playerWIN();
    }
    roundUpdate();
    scoreUpdate();
    setTimeout(resultUpdate,1);
    clearTimeout(resultUpdate);
}

function scissor() {
    let playerSelection=2;
    let computerSelection=computerChoice();
    console.log(computerSelection);
    if (playerSelection===computerSelection) {
        roundNumber+=1;
        drawResult();
    } else if (computerSelection===0) {
        computerScore+=1;
        roundNumber+=1;
        computerWIN();
    } else {
        playerScore+=1;
        roundNumber+=1;
        playerWIN();
    }
    roundUpdate();
    scoreUpdate();
    setTimeout(resultUpdate,1);
    clearTimeout(resultUpdate);
}

function computerChoice() {
    return Math.floor(Math.random()*3)
}

function roundUpdate() {
    return document.getElementById("round").innerHTML=`Round ${roundNumber}`
}

function scoreUpdate() {
    return document.getElementById("overallScore").innerHTML=`Player - ${playerScore} Computer - ${computerScore}`
}

function resultUpdate() {   
    if (computerScore===5) {
        if(confirm("GAME OVER, Computer Wins")==true){
            location.reload();
        } else {

        }
    } else if (playerScore===5) {
        if(confirm("You Win, Congratulations!")==true){
            location.reload();
        } else {
        }

    } else {
    }   
}

function drawResult() {
    return document.getElementById("Result").innerHTML=`This Round is a Draw` 
}

function computerWIN() {
    return document.getElementById("Result").innerHTML=`Computer Wins this round!`
}

function playerWIN() {
    return document.getElementById("Result").innerHTML=`You Win this round!`
}