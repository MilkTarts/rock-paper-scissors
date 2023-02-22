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

    return compChoice;
}

const getPlayerSelection = () => prompt("Rock, Paper , Scissors");

    //console.log(a.localeCompare(b,'en',{sensitivity: 'base'})); compares 2 strings ignoring case


function playRound(playerSelection, computerChoice){
    

}


console.log(getComputerChoice());
const player = getPlayerSelection();
const comp = getComputerChoice();

playRound(player, comp);