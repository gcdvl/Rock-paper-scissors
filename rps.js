function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
    

let humanscore=0;
let cpscore=0;



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


     
    const rockbtn = document.getElementById('rockbtn');
    rockbtn.addEventListener("click",function(){
          const cp_choice = get_cp();
    playround(cp_choice,"rock")});
    
    const paperbtn = document.getElementById('paperbtn');
    paperbtn.addEventListener("click",function(){
      const cp_choice = get_cp();
    playround(cp_choice,"paper")});

    const scissorsbtn = document.getElementById('scissorsbtn');
    scissorsbtn.addEventListener("click",function(){
      const cp_choice = get_cp();
    playround(cp_choice,"scissors")});
    
    
let round=0;

function playround(cp_choice, human_choice) {
  document.getElementById("displayresult").innerHTML="";
  cp_choice = String(cp_choice).toLowerCase();
  human_choice = String(human_choice).toLowerCase();
  
if(round<5){
  if (cp_choice ===  human_choice ) {
    document.getElementById("displayresult").innerHTML="Its a tie";
  }
   else if (
        (cp_choice === "rock" && human_choice === "scissors") ||
        (cp_choice === "paper" && human_choice === "rock") ||
        (cp_choice === "scissors" && human_choice === "paper")
      ) {
        document.getElementById("displayresult").innerHTML = "Computer wins!";
        cpscore+=1;
      } else {
        document.getElementById("displayresult").innerHTML = "You win!";
        humanscore+=1;
      }
      round++;
    }
    else if(round==5){
      document.getElementById("displayresult").innerHTML = "Your score: " + humanscore + "Computer Score: " + cpscore;
      round=0;
      humanscore=0;
      cpscore=0;
    }
}



