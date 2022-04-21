setTimeout(() => {
    document.body.classList.remove("preload");
  }, 500);
  

const buttonRules = document.querySelector(".rulesButton");
const buttonClose = document.querySelector(".closeButton");
const modal = document.querySelector(".modal");


buttonOptions = { //dictionary object with key/value pairing
    "rock": "/images/Rock.png",
    "paper": "/images/Paper.png",
    "scissors": "/images/Scissors.png"
}

let SCORE = 0;


const playerChoice = (button) => {
    //hide current page
    let buttonChoices = document.querySelector(".buttonChoices");
    buttonChoices.style.display = "none"; //this will hide the 3 buttons 

    let comparison = document.querySelector(".comparison");
    comparison.style.display = "flex"; //this will show the comparision div when a button is clicked by the player

    //set the player choice
    //when player picks a button, it displays the comparison screen with the currently picked button
    document.getElementById("playerPickImage").src = buttonOptions[button]; //go to dictionary, find key and "unlocks" the value paired with it 

    let houseButton = houseChoice();
    results(button, houseButton);
}

const houseChoice = () => {
    let buttonChoices = ["rock", "paper", "scissors"];
    let houseButton = buttonChoices[Math.floor(Math.random()*3)];

    document.getElementById("housePickImage").src = buttonOptions[houseButton];

    return houseButton;
}

const results = (playerButton, houseButton) => {

    if(playerButton == "paper" && houseButton == "scissors") {
        setDecision("YOU LOSE!");
    } 
    if(playerButton == "paper" && houseButton == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    } 
    if (playerButton == "paper" && houseButton == "paper") {
        setDecision("It's a tie!");
    }
      
    if (playerButton == "rock" && houseButton == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
      
    if (playerButton == "rock" && houseButton == "paper") {
        setDecision("YOU LOSE!");
    }
      
    if (playerButton == "rock" && houseButton == "rock") {
        setDecision("It's a tie!");
    }
      
    if (playerButton == "scissors" && houseButton == "scissors") {
        setDecision("It's a tie!");
    }
      
    if (playerButton == "scissors" && houseButton == "rock") {
        setDecision("YOU LOSE!");
    }
      
    if (playerButton == "scissors" && houseButton == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }

}


const restartGame = () => {

    let buttonChoices = document.querySelector(".buttonChoices");
    buttonChoices.style.display = "flex"; //this will hide the 3 buttons 

    let comparison = document.querySelector(".comparison");
    comparison.style.display = "none"; //this will show the comparision div when a button is clicked by the player


}
const setDecision = (decision) => {
    document.querySelector(".resultText h1").innerText = decision; //accessing the html element, h1, and changing it based on the game results that is based in if statements
}


const setScore = (score) => {
    SCORE = score; //saving score so that it will continue increasing
    document.querySelector(".score h1").innerText = score; //access h1 for score and changes it based on game results from if statements above
}


//Toggle Modal 
buttonRules.addEventListener("click", () => {
    modal.classList.toggle("showModal");
});

buttonClose.addEventListener("click", () => {
    modal.classList.toggle("showModal");
});