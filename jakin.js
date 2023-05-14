const computerChoiceDisplay = document.getElementById("computer-choice")
const usererChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let  usererChoice
let computerChoice
let result


getResult()
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    usererChoice = e.target.id
    usererChoiceDisplay.innerHTML = usererChoice
    generateComputerChoice()
    getResult()
})  )


function generateComputerChoice (){
    const randomNumber = Math.floor(Math.random()* 3 + 1)
   console.log(randomNumber)

if(randomNumber === 1){
    computerChoice = "rock"
}
if(randomNumber === 2){
    computerChoice = "paper"
}
if(randomNumber === 3){
   computerChoice = "scissors"
}
computerChoiceDisplay.innerHTML = computerChoice   

}

function getResult(){ 
    if (computerChoice === usererChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === "rock" && usererChoice === "paper") {
        result = 'you win!'
    }
    if (computerChoice === "rock" && usererChoice === "scissors") {
        result = 'you lost!'
    }
    if (computerChoice === "papper" && usererChoice === "scissors") {
        result = 'you win!'
    }
    if (computerChoice === "papper" && usererChoice === "rock") {
        result = 'you lost!'
    }
    if (computerChoice === "scissors" && usererChoice === "rock") {
        result = 'you win!'
    }
    if (computerChoice === "scissors" && usererChoice === "paper") {
        result = 'you lost!'
    }
      resultDisplay.innerHTML= result
}


 