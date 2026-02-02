let randomNumber;
let maxNumber;

function startGame() {
    maxNumber = document.getElementById("max").value;
    
    if(maxNumber === "" || maxNumber <= 0) {
        alert("Please Enter a Valid Max Number!");
        return;
    }
    randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    document.getElementById("result").innerText = "Game Started! Guess the number 🎮";
    document.getElementById("guess").disabled = false;
    document.getElementById("guessbtn").disabled = false;
}

function checkGuess() {
    let userGuess = document.getElementById("guess").value;
    let result = document.getElementById("result");

    if(userGuess === "") {
        result.innerText = "Please Enter a Number!";
        return;
    }

    if(userGuess == randomNumber) {
        result.innerText = "🎉Congrats! You guessed the correct Number : " + randomNumber;
        document.getElementById("guess").disabled = true;
        document.getElementById("guessbtn").disabled = true;
        document.getElementById("max").value = "";
    }
    else if(userGuess < randomNumber) {
        result.innerText = "Hint: Your Guess was too Small! Please try agin!";
    }
    else {
        result.innerText = "Hint: Your Guess was too Large! Please try agin!";
    }
    document.getElementById("guess").value = "";
}