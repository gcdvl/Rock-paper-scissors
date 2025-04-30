function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
    

let humanscore=0;
let cpscore=0;


function get_human()
{
  let human_choice = prompt("Enter Rock , Paper or Scissors");
  return human_choice;
}
function get_cp(){
  const randomNumber = getRandomIntInclusive(1, 3);
  if (randomNumber==1){
    return "rock";
  } 
  else if(randomNumber==2){
     
    return "scissors";
  }
  else{
    return "paper";
  }
}

function playround(cp_choice, human_choice) {
  cp_choice = String(cp_choice).toLowerCase();
  human_choice = String(human_choice).toLowerCase();

  if (cp_choice === 'rock' && human_choice === 'rock') {
    console.log("It's a tie");
  } else if (cp_choice === 'rock' && human_choice === 'paper') {
    console.log("Congrats, Paper beats Rock");
    humanscore += 1;
  } else if (cp_choice === 'rock' && human_choice === 'scissors') {
    console.log("Oh you lost, Rock beats Scissors");
    cpscore += 1;
  } else if (cp_choice === 'paper' && human_choice === 'rock') {
    console.log("Oh you lost, Paper beats Rock");
    cpscore += 1;
  } else if (cp_choice === 'paper' && human_choice === 'paper') {
    console.log("It's a tie");
  } else if (cp_choice === 'paper' && human_choice === 'scissors') {
    console.log("Congrats, you won, Scissors beats Paper");
    humanscore += 1;
  } else if (cp_choice === 'scissors' && human_choice === 'rock') {
    console.log("Congrats, you won, Rock beats Scissors");
    humanscore += 1;
  } else if (cp_choice === 'scissors' && human_choice === 'scissors') {
    console.log("It's a tie");
  } else if (cp_choice === 'scissors' && human_choice === 'paper') {
    console.log("Oh you lost, Scissors beats Paper");
    cpscore += 1;
  } else {
    console.log("Unwanted Error");
  }
}

function playgame()
{
  
  let n = 5;
  for(let i=0; i<n ; i++){

    const human_selection = get_human();
    const com_selection = get_cp();

    playround(com_selection , human_selection);
  }
  console.log("Your score : ", humanscore , "Computer score : ", cpscore);

  

}


playgame();