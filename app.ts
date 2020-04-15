const game = () => {
    let pScore : number = 0
    let cScore : number = 0

    const startGame = () => {
        const playButton: HTMLElement = document.querySelector('.intro button')
        const introScreen: HTMLElement = document.querySelector('.intro')
        const match: HTMLElement = document.querySelector('.match')

        playButton.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
        })
    }

    const playMatch = () => {
        const options = document.querySelectorAll('.options button')

        const playerHand: HTMLImageElement = document.querySelector('.player-hand')
        const cpuHand: HTMLImageElement = document.querySelector('.cpu-hand')

        const hands = document.querySelectorAll('.hands img')

        hands.forEach((hand: HTMLImageElement) => {
            hand.addEventListener('animationend', function(){
                this.style.animation = ''
            })
        })

        const cpuOptions : string[] = ['rock', 'paper', 'scissors']

        options.forEach((option: HTMLElement) =>{
            option.addEventListener('click', function(){
                const cpuNumber: number = Math.floor(Math.random() * 3)
                const cpuChoice : string = cpuOptions[cpuNumber]

                setTimeout(()=>{
                    compareHands(this.textContent, cpuChoice)

                    playerHand.src = `./assets/${this.textContent}.png`
                    cpuHand.src = `./assets/${cpuChoice}.png`
                }, 2000)
                

                playerHand.style.animation = "shakePlayer 2s ease"
                cpuHand.style.animation = "shakeCpu 2s ease"
            })
        })
    }


    const updateScore = () => {
        const playerScore: HTMLElement = document.querySelector('.player-score p')
        const cpuScore: HTMLElement = document.querySelector('.cpu-score p')

        playerScore.textContent = pScore.toString()
        cpuScore.textContent = cScore.toString()
    }

    const compareHands = (playerChoice: string, cpuChoice: string) => {
        const winner: HTMLElement = document.querySelector('.winner')

        if (playerChoice === cpuChoice){
            winner.textContent = 'It is a Tie'
            return
        }

        if (playerChoice === 'rock'){
            if (cpuChoice === 'paper'){
                winner.textContent = 'You Lose'
                cScore++
                updateScore()
                return
            }else{
                winner.textContent = 'You Win'
                pScore++
                updateScore()
                return
            }
        }

        if (playerChoice === 'paper') {
            if (cpuChoice === 'rock') {
                winner.textContent = 'You Win'
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = 'You Lose'
                cScore++
                updateScore()
                return
            }
        }

        if (playerChoice === 'scissors') {
            if (cpuChoice === 'rock') {
                winner.textContent = 'You Lose'
                cScore++
                updateScore()
                return
            } else {
                winner.textContent = 'You Win'
                pScore++
                updateScore()
                return
            }
        }
    }

    startGame()
    playMatch()
}

game()