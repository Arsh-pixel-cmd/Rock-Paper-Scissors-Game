let userScore = 0;

let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msgPara = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");

const compScorepara = document.querySelector("#Comp-score");

const geneCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return  options [randIdx];
};

const drawGame = () =>{
    msgPara.innerText = "Game was draw Play again";
    msgPara.style.backgroundColor = "#736B60";
};

const showWinner = (userWin,userChoice,compChoice) =>{
      if(userWin){
        msgPara.innerText = `You Win !! ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor = "green";
        userScore++;
        userScorepara.innerText = userScore;
      } else {
        msgPara.innerText = `You Loss ! ${compChoice} beats ${userChoice}`;
        msgPara.style.backgroundColor = "#A52A2A";
        compScore++;
        compScorepara.innerText = compScore;
      }
};

const palyGame = (userChoice) =>{
    //Generate comp choice 
    const compChoice =  geneCompChoice();
    
    if(userChoice === compChoice) {
        // draw game
        drawGame ();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissor , paper
            userWin = compChoice === "paper" ? false :true;
        } else if (userChoice === "paper") {
            // rock , scissor
            userWin = compChoice === "scissor" ? false :true;
        } else {
            // rock , paper
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice ) =>{ // user choice has been selected 
    choice.addEventListener("click" , ()=>{
       const userChoice = choice.getAttribute("id");
       palyGame(userChoice);
    });
});

