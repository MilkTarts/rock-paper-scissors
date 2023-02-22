//function to randomly get computer choice

function getComputerChoice()
{
    let num = Math.ceil(Math.random()*3);
    console.log(num);
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

console.log(getComputerChoice());