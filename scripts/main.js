// Roshambo
// Copyright (C) William Wan 2021
// Part of The Odin Project
 
// Variables
let win = 0;
let lose = 0;
let tie = 0;

const WIN = 'You win.'
const LOSE = 'You lose.'
const TIE = 'You tied.'
const CHS = 'You chose '
const CHS2 = 'The computer chose '

// Dark Mode Toggle

const html = document.querySelector('html');
const darkSwitch = document.querySelector('span.dark-mode label.switch input[type="checkbox"]');

function darkModeToggle() {
    if (darkSwitch.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    darkModeToggle();
});
darkSwitch.addEventListener('change', () => {
    darkModeToggle();
});

// Lizard Spock Toggle

const lsSwitch = document.querySelector('span.lizard-spock label.switch input[type="checkbox"]');
const title = document.querySelector('.title');
const description = document.querySelector('.description');

function lsToggle() {
    if (lsSwitch.checked) {
        title.textContent = 'Rock, Paper, Scissors, Lizard, Spock!'
        description.innerHTML = 'Press a button to play a game of <span class="tooltip">"Rock, Paper, Scissors, Lizard, Spock".<span class="tooltiptext">In "rock paper scissors lizard Spock" the normal rules of RPS apply with some additions. Spock smashes scissors and vaporizes rock, but is disproved by paper and poisoned by lizard. Lizard poisons Spock and eats paper, but is crushed by rock and decapitated by scissors.</span></span>'
        document.querySelector('span.lizard').classList.remove('hidden');
        document.querySelector('span.Spock').classList.remove('hidden');
    } else {
        title.textContent = 'Rock, Paper, Scissors!'
        description.innerHTML = 'Press a button to play a game of <span class="tooltip">"Rock, Paper, Scissors".<span class="tooltiptext">"Rock paper scissors" is a hand game played between two people. The goal is to beat the other player\'s gesture with your own. Rock smashes scissors. Paper covers rock. And scissors cut paper.</span></span>'
        document.querySelector('span.lizard').classList.add('hidden');
        document.querySelector('span.Spock').classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    lsToggle();
});
lsSwitch.addEventListener('change', () => {
    lsToggle();
});

// Reset Button

const reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
    win = 0;
    lose = 0;
    tie = 0;
    resultUpdate();
})

// Game

const wins = document.querySelector('.wins');
const losses = document.querySelector('.losses');
const ties = document.querySelector('.ties');
const resultText = document.querySelector('#result');

let difficulty = document.querySelector('input[name="difficulty"]:checked').value;

const difs = document.querySelectorAll('input[name="difficulty"]');
const btns = document.querySelectorAll('.button');

btns.forEach(element => element.addEventListener('click', () => {
    resultOutput(element.classList[1]);
    if (!element.classList.contains('active')) {
        element.classList.add('active');
    }
    setTimeout(() => {element.classList.remove('active');}, 70)
}));

document.addEventListener('DOMContentLoaded', () => {
    resultUpdate();
});

difs.forEach(element => element.addEventListener('change', () => {
    difficulty = document.querySelector('input[name="difficulty"]:checked').value;
}));


// Functions

function resultUpdate() {
    wins.innerHTML = `<b>Wins</b>: ${win}`
    losses.innerHTML = `<b>Losses</b>: ${lose}`
    ties.innerHTML = `<b>Ties</b>: ${tie}`
}
function compGenerator() {
    let result;
    if (lsSwitch.checked) {
        let ran = Math.floor(Math.random() * 5);
        switch (ran) {
            case 0:
                result = 'rock';
                break;
            case 1:
                result = 'paper';
                break;
            case 2:
                result = 'scissors';
                break;
            case 3:
                result = 'lizard';
                break;
            case 4:
                result = 'Spock';
                break;
            default:
                result = 'error';
        }
    } else {
        let ran = Math.floor(Math.random() * 3);
        switch (ran) {
            case 0:
                result = 'rock';
                break;
            case 1:
                result = 'paper';
                break;
            case 2:
                result = 'scissors';
                break;
        }
    }
    return result;
}
function resultGenerator(pChoice, cChoice) {
    switch(pChoice) {
        case 'rock':
            switch(cChoice) {
                case 'rock':
                    return 'tie';
                    break;
                case 'paper':
                case 'Spock':
                    return 'lose';
                    break;
                case 'scissors':
                case 'lizard':
                    return 'win';
                    break;
                default:
                    return 'error';
            }
            break;
        case 'paper':
            switch(cChoice) {
                case 'paper':
                    return 'tie';
                    break;
                case 'scissors':
                case 'lizard':
                    return 'lose';
                    break;
                case 'rock':
                case 'Spock':
                    return 'win';
                    break;
                default:
                    return 'error';
            }
            break;
        case 'scissors':
            switch(cChoice) {
                case 'scissors':
                    return 'tie';
                    break;
                case 'rock':
                case 'Spock':
                    return 'lose';
                    break;
                case 'paper':
                case 'lizard':
                    return 'win';
                    break;
            }
            break;
        case 'lizard':
            switch(cChoice) {
                case 'lizard':
                    return 'tie';
                    break;
                case 'rock':
                case 'scissors':
                    return 'lose';
                    break;
                case 'paper':
                case 'Spock':
                    return 'win';
                    break;
                default:
                    return 'error';
            }
            break;
        case 'Spock':
            switch(cChoice) {
                case 'Spock':
                    return 'tie';
                    break;
                case 'paper':
                case 'lizard':
                    return 'lose';
                    break;
                case 'rock':
                case 'scissors':
                    return 'win';
                    break;
                default:
                    return 'error';
            }
            break;
        default:
            return 'error';
    }
}
function resultOutput(choice) {
    let comp = compGenerator();
    let result = resultGenerator(choice, comp)

    switch(difficulty) {
        case 'normal':
            switch(result) {
                case 'win':
                    win++;
                    resultUpdate();
                    resultText.textContent = `${CHS}${choice}. ${CHS2}${comp}. ${WIN}`;
                    break;
                case 'tie':
                    tie++;
                    resultUpdate();
                    resultText.textContent = `${CHS}${choice}. ${CHS2}${comp}. ${TIE}`;
                    break;
                case 'lose':
                    lose++;
                    resultUpdate();
                    resultText.textContent = `${CHS}${choice}. ${CHS2}${comp}. ${LOSE}`;
                    break;
                default:
                    resultText.textContent = 'There was an error. Please contact the dev.'
            }
            break;
        case 'hard':
            switch(result) {
                case 'lose':
                    lose++;
                    resultUpdate();
                    resultText.textContent = `${CHS}${choice}. ${CHS2}${comp}. ${LOSE}`;
                    break;
                case 'tie':
                case 'win':
                    let compNew = compGenerator();
                    result = resultGenerator(choice, compNew);
                    switch(result) {
                        case 'win':
                            win++;
                            resultUpdate();
                            resultText.textContent = `${CHS}${choice}. ${CHS2}${compNew}. ${WIN}`;
                            break;
                        case 'tie':
                            tie++;
                            resultUpdate();
                            resultText.textContent = `${CHS}${choice}. ${CHS2}${compNew}. ${TIE}`;
                             break;
                        case 'lose':
                            lose++;
                            resultUpdate();
                            resultText.textContent = `${CHS}${choice}. ${CHS2}${compNew}. ${LOSE}`;
                            break;
                        default:
                            resultText.textContent = 'There was an error. Please contact the dev.'
                    }
                    break;
                default:
                    resultText.textContent = 'There was an error. Please contact the dev.'
            }
            break;
        case 'easy':
            switch(result) {
                case 'win':
                    win++;
                    resultUpdate();
                    resultText.textContent = `${CHS}${choice}. ${CHS2}${comp}. ${WIN}`;
                    break;
                case 'tie':
                case 'lose':
                    let compNew = compGenerator();
                    let resultNew= resultGenerator(choice, compNew);
                    switch(resultNew) {
                        case 'win':
                            win++;
                            resultUpdate();
                            resultText.textContent = `${CHS}${choice}. ${CHS2}${compNew}. ${WIN}`;
                            break;
                        case 'tie':
                            tie++;
                            resultUpdate();
                            resultText.textContent = `${CHS}${choice}. ${CHS2}${compNew}. ${TIE}`;
                            break;
                        case 'lose':
                            lose++;
                            resultUpdate();
                            resultText.textContent = `${CHS}${choice}. ${CHS2}${compNew}. ${LOSE}`;
                            break;
                        default:
                            resultText.textContent = 'There was an error. Please contact the dev.'
                    }
                    break;
                default:
                    resultText.textContent = 'There was an error. Please contact the dev.'
            }
            break;
        case 'impossible':
            if (result == 'lose') {
                lose++;
                resultUpdate();
                resultText.textContent = `${CHS}${choice}. ${CHS2}${comp}. ${LOSE}`;
            } else {
                let compNew = compGenerator();
                result = resultGenerator(choice, compNew);
                while (result != 'lose') {
                    compNew = compGenerator();
                    result = resultGenerator(choice, compNew);
                }
                if (result == 'lose') {
                    lose++;
                    resultUpdate();
                    resultText.textContent = `${CHS}${choice}. ${CHS2}${compNew}. ${LOSE}`;
                } else {
                    resultText.textContent = 'There was an error. Please contact the dev.'
                }
            }
            break;
        default:
            resultText.textContent = 'There was an error. Please contact the dev.'
    }
}