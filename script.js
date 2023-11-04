//game logic:
// creating an  array for our options: rock paper scissors
//creating a for loop  and using in it an event to check what are our selected options
// creating a function to make selections
// creating a funtion to increment the score
// creating a function add the selected result
// creating a function to check who is the winner 
// creating a function for the computer to select a random option


const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper'
  }
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => { 		//e stands for event
    const selectionName = selectionButton.dataset.selection // creating a variable to save the selected option name
    const selection = SELECTIONS.find(selection => selection.name === selectionName) // creating another variable to save the selected option
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)

  	
	console.log(computerSelection) // this cosole.log is just for checking in the inspection if the selection code is working
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name//we can find this in the array above
	//if the opponent chooses a name that gets beaten by our selection then we win
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}