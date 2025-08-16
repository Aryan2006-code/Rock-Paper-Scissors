let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const uScore= document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const genCompChoice =()=>{
    let options =["rock" , "paper" , "scissors"];
    let idx=Math.floor(Math.random()*3); // to make range between 0 to 2 ,Math.floor for removing decimal
    return options[idx];
};

const draw =()=>{
    msg.innerText="Game was Draw !!";
    msg.style.backgroundColor= "#081b31";
};

const showWinner=(userWin , userChoice , compChoice)=>{
    if(userWin){
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        userScore++;
        uScore.innerText=userScore;
        msg.style.backgroundColor= "green";
    }
    
    else{
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
        compScore++;
        cScore.innerText=compScore;
        msg.style.backgroundColor= "red";
    }
};

const playGame =(userChoice)=>{
    let compChoice = genCompChoice();
     
    if(userChoice === compChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userChoice ==="rock" ){
            // scissors , paper
            userWin = compChoice === "paper"?false : true;
        }
        else if(userChoice==="paper"){
            // rock , scisssors
            userWin= compChoice=="scissors"?false : true;
        }
        else if(userChoice ==="scissors"){
            // rock,paper
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice ,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});