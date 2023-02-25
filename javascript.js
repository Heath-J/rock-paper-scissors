function displayGameOverMessage () {

    // Displays a game over message if the player clicks a button after the game has ended - replaces the message with the same
    // message if the button is clicked repeatedly so that it's only displayed once onscreen
    
        const gameOver = document.createElement('div');
        gameOver.textContent = ` 
The game has finished - please click the button to play again!
 `;                                                                         // Blank lines added for formatting reasons
        results.replaceChildren(gameOver);                                  // style="white-space: pre" added to the div for the 
        const refreshPage = document.createElement('button');               // line break to work on screen
        refreshPage.classList.add("playAgainButton")
        refreshPage.textContent = 'Play again';
        refreshPage.addEventListener('click', () => {
            window.location.reload();
        });
        results.appendChild(refreshPage);
}
    
function getComputerChoice() {

    // Assigns a random number from 1 to 3 to the computer. Returns either rock (1), paper(2) or scissors (3).

    const computerRandom = Math.floor((Math.random() * 3) + 1);
    if (computerRandom === 1) {
        return computerChoice = 'rock';
    } else if (computerRandom === 2) {
        return computerChoice = 'paper';
    } else {return computerChoice = 'scissors';}  
}

function showSelections(playerSelection, computerSelection) {

    // Displays the player's and computer's selection of either rock, paper or scissors
        
            const content = document.createElement('div');
            content.textContent = ` 
You chose ${playerSelection}, the computer chose ${computerSelection}.`; // blank line above inserted for formatting reasons
            results.replaceChildren(content);                            // replaces the previous round's text with this round's
} 

function playRound(playerSelection, computerSelection) {
    
    // Plays a round of rock paper scissors. Compares two parameters (the player's selection and the computer's selection)
    // and displays the result on screen

    // Note: r > s, p > r, s > p

    const score = document.createElement('div');

    if (playerSelection === 'rock' && computerSelection === 'paper') {   
        score.textContent = `You lose! Paper beats rock
 `;                                                    // line break and one space inserted for formatting reasons - needed to add 
        computerWin++;                                 // style="white-space: pre" to the div for the line break to work on screen
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        score.textContent = `You win! Rock beats scissors
 `;
        playerWin++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        score.textContent = `You lose! Scissors beats paper
 `;
        computerWin++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        score.textContent = `You win! Paper beats rock
 `;
        playerWin++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        score.textContent = `You lose! Rock beats scissors
 `;
        computerWin++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        score.textContent = `You win! Scissors beats paper
 `;
        playerWin++;
    } else {
        score.textContent = `It's a draw!
 `;}

    results.appendChild(score);                                   // displays this round's score                                

    const scoresSoFar = document.createElement('div');
    scoresSoFar.textContent = `Scores so far: you - ${playerWin}, computer - ${computerWin}`;                                                             // inserted for formatting reasons
    results.appendChild(scoresSoFar);                             // adds the score so far to the bottom of this round's text
}

function declareWinner (playerWin, computerWin) {

// Compares the player's and computer's overall scores and declares the winner

    const winner = document.createElement('h2');
    if (playerWin > computerWin) {
        winner.textContent = 'Game finished! Yay, you won!';
    } else {
        winner.textContent = 'Game finished! Bad luck, the computer won.';
    }
    results.appendChild(winner);
}

// playerWin and computerWin need to be defined outside of the functions that use them 
// or they don't work (due to scope ?? )

let playerWin = 0;
let computerWin = 0; 

// the following decides what happens when the rock button is clicked - displays game over message or plays a round of rps,
// depending on the current scores

const rockButton = document.querySelector('#rockButton'); 
rockButton.addEventListener('click', () => {
    if (playerWin === 5 || computerWin === 5) {
        displayGameOverMessage();
    } else {
        const playerSelection = 'rock';
        const computerSelection = getComputerChoice();
        showSelections(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
        if (playerWin === 5 || computerWin === 5) {
            declareWinner(playerWin, computerWin);
        }
    }
});

// the following decides what happens when the paper button is clicked - displays game over message or plays a round of rps,
// depending on the current scores

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => {
    if (playerWin === 5 || computerWin === 5) {
        displayGameOverMessage();
    } else {
        const playerSelection = 'paper';
        const computerSelection = getComputerChoice();
        showSelections(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
        if (playerWin === 5 || computerWin === 5) {
            declareWinner(playerWin, computerWin);
        }
    }
});

// the following decides what happens when the scissors button is clicked - displays game over message or plays a round of rps,
// depending on the current scores

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', () => {
    if (playerWin === 5 || computerWin === 5) {
        displayGameOverMessage();
    } else {
        const playerSelection = 'scissors';
        const computerSelection = getComputerChoice();
        showSelections(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
        if (playerWin === 5 || computerWin === 5) {
            declareWinner(playerWin, computerWin);
        }
    }
});