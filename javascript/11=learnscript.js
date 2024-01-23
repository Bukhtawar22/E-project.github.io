//nested if else 

let winningNumber = 19;
let userGuess = +prompt("Guess a number"); // prompt string mein lyta hy number ko toh hum ny is ko number m convert krna hy os k liy (+prompt) use krna hoga

if (userGuess === winningNumber) {
    console.log("your guess is right");
    
} else {
    if (userGuess < winningNumber) {  // if else ko nest kena mtlb if else k ander if else use krna 
        console.log("too low");
    } else {
        console.log("too high");
    }
}