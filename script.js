//function to randomly get computer choice

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

    console.log(compChoice);

    return compChoice;
}

const getPlayerSelection = () => prompt("Rock, Paper , Scissors");

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

                result = 'You Win! ' +playerSelection + ' beats '+ computerChoice;    
    }
    else if(playerSelection == 'scissors' && computerChoice == 'rock' || 
            playerSelection == 'rock' && computerChoice == 'paper' ||
            playerSelection == 'paper' && computerChoice == 'scissors'){

            result = 'You Lose! ' +computerChoice + ' beats '+playerSelection;
    }
    else{
        result = 'Wrong input! You typed: '+playerSelection;
    }

    return result;

}

const comp = getComputerChoice();
const player = getPlayerSelection();


console.log(playRound(player, comp));