//function to randomly get computer choice

 let playerScore = 0;
 let computerScore = 0;


function getComputerChoice()
{
    let num = Math.ceil(Math.random()*3);
    let compChoice = "";

    switch(num){

        case 1:
            compChoice = "Rock";
            break;

        case 2: 
            compChoice = "Paper";
            break;

        case 3:
            compChoice = "Scissors"
            break;
    }

    //console.log(compChoice);

    return compChoice;
}

function getPlayerSelection(){
    return prompt("Rock, Paper , Scissors");
} 

    //console.log(a.localeCompare(b,'en',{sensitivity: 'base'})); compares 2 strings ignoring case


function playRound(playerSelection, computerChoice){
    
    playerSelection = playerSelection.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    let result = '';

    if (playerSelection == computerChoice) {
        result = 'Draw!';
    }
    else if(playerSelection == 'rock' && computerChoice == 'scissors' || 
            playerSelection == 'paper' && computerChoice == 'rock' ||
            playerSelection == 'scissors' && computerChoice == 'paper'){

            playerScore++;    

            result = 'You Win!'; //+playerSelection + ' beats '+ computerChoice;    
    }
    else if(playerSelection == 'scissors' && computerChoice == 'rock' || 
            playerSelection == 'rock' && computerChoice == 'paper' ||
            playerSelection == 'paper' && computerChoice == 'scissors'){

            computerScore++;    

            result = 'You Lose!'; //+computerChoice + ' beats '+playerSelection;
    }
    else{
        result = 'Wrong input! You typed: '+playerSelection;
    }

    console.log('You played '+ playerSelection + ' computer played '+computerChoice+' '+result);

    const resultsContainer = document.querySelector('#results');

    resultsContainer.innerText = 'You played '+ playerSelection + ' computer played '+computerChoice+' '+result;
    
    const pScore = document.querySelector('#player');
    const cScore = document.querySelector('#computer');

    pScore.innerText = `Player :${playerScore}`;
    cScore.innerText = `Computer:${computerScore}`;

    if(playerScore == 5 || computerScore == 5){
        if(playerScore > computerScore){
            resultsContainer.innerText='You played '+ playerSelection + ' computer played '+computerChoice+' '+"You are the first to 5 wins";
        }
        else{
            resultsContainer.innerText='You played '+ playerSelection + ' computer played '+computerChoice+' '+"Computer is the first to 5 wins";
        }

        playerScore = 0;
        computerScore = 0;

    }

}

/*function game(){
    let arrResults = [];
    let arrHistory = [];
    let winner ='';

    for (let i = 0; i < 5; i++) {
        let comp = getComputerChoice();
        let player = getPlayerSelection();
        arrResults.push(playRound(player,comp));
        arrHistory.push("Player Choice: "+ player+", Computer choice: "+comp+", Result: "+ playRound(player,comp));
    }

    let draws = 0;
    let wins = 0;
    let loses = 0;

    for(i =0; i< arrResults.length;i++){
        if(arrResults[i].toLowerCase() == 'draw!')
        {
            draws++;
        }
        else if(arrResults[i].toLowerCase() == 'you win!'){
            wins++;
        }
        else if(arrResults[i].toLowerCase() == 'you lose!'){
            loses++;
        }
    }

    if(wins > loses && wins > draws){
        winner = "Player is the Winner";
    }
    else if(loses > wins && loses > draws){
        winner = "Computer is the Winner";
    }
    else if(draws > loses && draws > loses || wins == loses){
        winner = "Player and Computer Tie";
    }

    for(i =0; i<arrHistory.length;i++){

        console.log(arrHistory[i]+'\n');
    }

    console.log("Draws: "+draws +"\nWins:  "+ wins+ "\nLoses: "+loses);
    console.log(winner);
    
}*/

const btnRock = document.querySelector('#btn-rock');

btnRock.addEventListener('click', ()=>playRound('rock',getComputerChoice()));

const btnPaper = document.querySelector('#btn-paper');

btnPaper.addEventListener('click', ()=>playRound('paper',getComputerChoice()));

const btnScissors = document.querySelector('#btn-scissors');

btnScissors.addEventListener('click', ()=>playRound('scissors',getComputerChoice()));



//const comp = getComputerChoice();
//const player = getPlayerSelection();


//console.log(playRound(player, comp));

