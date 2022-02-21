//rules modal
const rulesModal = document.querySelector(".rule-modal")
const rulesBtn = document.querySelector(".rules")
const closeBtn = document.getElementById("close-btn")

rulesBtn.addEventListener("click", () =>{
    rulesModal.classList.remove('inactive')
})
closeBtn.addEventListener("click", () => {
    rulesModal.classList.add("inactive")
})

//main-setup

const handsArr = [
    {
        hand: "paper",
        img: "images/icon-paper.svg"
    },
    {
        hand: "rock",
        img: "images/icon-rock.svg"
    },
    {
        hand: "scissors",
        img: "images/icon-scissors.svg"
    }
]
const paperBtn = document.getElementById("paper")
const rockBtn = document.getElementById("rock")
const scissorsBtn = document.getElementById("scissors")
let playerHand;
let homeHand;
let j;
let rounds = 0
let score = 0

function checkScore(){
    if(score === 5){
        if(rounds === score){
            console.log(rounds)
            console.log(score)
            document.getElementById("luck-meter").value = 10
        } else if(rounds - score >= 1 && rounds - score <= 3){
            console.log(rounds)
            console.log(score)
            document.getElementById("luck-meter").value = 9
            document.getElementById("luck-status").textContent = `Your luck is ${document.getElementById("luck-meter").value * 10}%`
        } else if(rounds - score >= 4 && rounds - score <= 7){
            console.log(rounds)
            console.log(score)
            document.getElementById("luck-meter").value = 8
            document.getElementById("luck-status").textContent = `Your luck is ${document.getElementById("luck-meter").value * 10}%`
        } else if(rounds - score >= 7 && rounds - score <= 9){
            console.log(rounds)
            console.log(score)
            document.getElementById("luck-meter").value = 7
            document.getElementById("luck-status").textContent = `Your luck is ${document.getElementById("luck-meter").value * 10}%`
        } else {
            console.log(rounds)
            console.log(score)
            document.getElementById("luck-meter").value = 5
            document.getElementById("luck-status").textContent = `Your luck is ${document.getElementById("luck-meter").value * 10}%`
        }
        document.querySelector(".luck-modal").classList.remove("inactive")
    }
}

paperBtn.addEventListener("click", function(){
    playerHand = "paper"
    document.querySelector(".main-game").classList.add("inactive")
    document.querySelector(".game-results").classList.remove("inactive")
    document.getElementById("player-output").src = "images/icon-paper.svg"
    j = Math.floor(Math.random() * 3)
    homeHand = handsArr[j].hand
    if (homeHand === "paper"){
        draw()
        document.getElementById("bot-output").src = "images/icon-paper.svg"
    } else if (homeHand === "rock"){
        won()
        document.getElementById("bot-output").src = "images/icon-rock.svg"
    } else {
        document.getElementById("bot-output").src = "images/icon-scissors.svg"
        lost()
    }
})
rockBtn.addEventListener("click", function(){
    playerHand = "rock"
    document.querySelector(".main-game").classList.add("inactive")
    document.querySelector(".game-results").classList.remove("inactive")
    document.getElementById("player-output").src = "images/icon-rock.svg"
    j = Math.floor(Math.random() * 3)
    homeHand = handsArr[j].hand
    if (homeHand === "paper"){
        lost()
        document.getElementById("bot-output").src = "images/icon-paper.svg"
    } else if (homeHand === "rock"){
        draw()
        document.getElementById("bot-output").src = "images/icon-rock.svg"
    } else {
        document.getElementById("bot-output").src = "images/icon-scissors.svg"
        won()
    }
})
scissorsBtn.addEventListener("click", function(){
    playerHand = "scissors"
    document.querySelector(".main-game").classList.add("inactive")
    document.querySelector(".game-results").classList.remove("inactive")
    document.getElementById("player-output").src = "images/icon-scissors.svg"
    j = Math.floor(Math.random() * 3)
    homeHand = handsArr[j].hand
    if (homeHand === "paper"){
        won()
        document.getElementById("bot-output").src = "images/icon-paper.svg"
    } else if (homeHand === "rock"){
        lost()
        document.getElementById("bot-output").src = "images/icon-rock.svg"
    } else {
        document.getElementById("bot-output").src = "images/icon-scissors.svg"
        draw()
    }
})


function won(){
    score += 1
    rounds += 1
    document.getElementById("score-display").textContent = score
    document.getElementById("result-display").textContent = "You Won"
    document.getElementById("player").classList.add("win")
    document.getElementById("player").classList.remove("lose")
    document.getElementById("bot").classList.add("lose")
    document.getElementById("bot").classList.remove("win")
    document.getElementById("bot").classList.remove("draw")
    document.getElementById("player").classList.remove("draw")
    checkScore()
}
function lost(){
    rounds += 1
    document.getElementById("score-display").textContent = score
    document.getElementById("result-display").textContent = "You Lost"
    document.getElementById("player").classList.add("lose")
    document.getElementById("player").classList.remove("win")
    document.getElementById("bot").classList.add("win")
    document.getElementById("bot").classList.remove("lose")
    document.getElementById("bot").classList.remove("draw")
    document.getElementById("player").classList.remove("draw")
}
function draw(){
    document.getElementById("result-display").textContent = "Draw"
    document.getElementById("bot").classList.add("draw")
    document.getElementById("player").classList.add("draw")
    document.getElementById("bot").classList.remove("win")
    document.getElementById("bot").classList.remove("lose")
}


document.getElementById("next-round").addEventListener("click", function(){
    document.querySelector(".main-game").classList.remove("inactive")
    document.querySelector(".game-results").classList.add("inactive")
})
document.getElementById("restart").addEventListener("click", function(){
    document.querySelector(".main-game").classList.remove("inactive")
    document.querySelector(".game-results").classList.add("inactive")
    document.querySelector(".luck-modal").classList.add("inactive")
    score = 0
    rounds = 0
    document.getElementById("score-display").textContent = score
})