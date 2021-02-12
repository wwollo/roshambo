// Constants
const TIE = 'There was a tie.';
const WIN = 'You win!';
const LOSE = 'You lose!';
const ERROR = 'Something went wrong.';
const WRONG = 'Wrong game.'
const INVALID = 'Invalid input. Try again.'

// Listeners
document.getElementById('game').onclick = function () {
    let result = game();
    let output = document.getElementById('output');
    output.innerHTML = ''

    switch (result[2]) {
        case TIE:
            output.innerHTML = `<p>${TIE} ${result[1]} ties with ${result[0]}.</p>`;
            break;
        case WIN:
            output.innerHTML = `<p>${WIN} ${result[0]} beats ${result[1]}.</p>`;
            break;
        case LOSE:
            output.innerHTML = `<p>${LOSE} ${result[1]} beats ${result[0]}.</p>`;
            break;
        case ERROR:
            output.innerHTML = `<p>${ERROR}</p>`;
            break;
        case WRONG:
            output.innerHTML = `<p><a href="lizardspock/index.html">${WRONG}</a></p>`;
            break;
        default:
            output.innerHTML = `<p>${INVALID}</p>`;
    }
}
document.getElementById('game5').onclick = function () {
    let scoreYou = 0;
    let scoreCom = 0;
    let exit = '';
    let output = document.getElementById('output');
    output.innerHTML = '';

    for (i = 0; i<5; i++) {
        let result = game();

        switch (result[2]) {
            case TIE:
                break;
            case WIN:
                scoreYou++;
                break;
            case LOSE:
                scoreCom++;
                break;
            case ERROR:
            case WRONG:
                exit = result[2];
                i = 5;
                break;
            default:
                exit = INVALID
                i = 5;
        }
    }

    switch (true) {
        case Boolean(exit):
            switch (true) {
                case (exit == ERROR):
                    output.innerHTML = `<p>${ERROR}</p>`;
                    break;
                case (exit == WRONG):
                    output.innerHTML = `<p><a href="lizardspock/index.html">${WRONG}</a></p>`;
                    break;
                default:
                    output.innerHTML = `<p>${INVALID}</p>`;
            }
            break;
        default:
            switch (true) {
                case (scoreYou > scoreCom):
                    output.innerHTML = `<p>You won ${scoreYou} points to ${scoreCom} points. You won ${scoreYou} times, lost ${scoreCom} times, and tied ${5-scoreYou-scoreCom} times.</p>`;
                    break;
                case (scoreYou < scoreCom):
                    output.innerHTML = `<p>You lost ${scoreYou} points to ${scoreCom} points. You won ${scoreYou} times, lost ${scoreCom} times, and tied ${5-scoreYou-scoreCom} times.</p>`;
                    break;
                default:
                    output.innerHTML = `<p>You tied ${scoreYou} points to ${scoreCom} points. You won ${scoreYou} times, lost ${scoreCom} times, and tied ${5-scoreYou-scoreCom} times.</p>`;
            }
    }
}

// Functions
function computerPlay() {
    let random = Math.floor(Math.random() * 3);

    switch(random) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            return ERROR;
    }
}
function game() {
    let playerSelection = document.getElementById('input').value.replace(/[^a-zA-Z0-9]/gi, '').charAt(0).toUpperCase() + document.getElementById('input').value.replace(/[^a-zA-Z0-9]/gi, '').slice(1).toLowerCase();
    let computerSelection = computerPlay();
    let result = [playerSelection, computerSelection]

    switch (playerSelection) {
        case 'Rock':
            switch (computerSelection) {
                case 'Rock':
                    result[2] = TIE;
                    break;
                case 'Paper':
                    result[2] = LOSE;
                    break;
                case 'Scissors':
                    result[2] = WIN;
                    break;
                default:
                    result[2] = ERROR;
            }
            return result;
            break;
        case 'Paper':
            switch (computerSelection) {
                case 'Rock':
                    result[2] = WIN;
                    break;
                case 'Paper':
                    result[2] = TIE;
                    break;
                case 'Scissors':
                    result[2] = LOSE;
                    break;
                default:
                    result[2] = ERROR;
            }
            return result;
            break;
        case 'Scissors':
            switch (computerSelection) {
                case 'Rock':
                    result[2] = LOSE;
                    break;
                case 'Paper':
                    result[2] = WIN;
                    break;
                case 'Scissors':
                    result[2] = TIE;leotard
                    break;
                default:
                    result[2] = ERROR;
            }
            return result;
            break;
        case 'Lizard':
        case 'Spock':
            result[2] = WRONG;
            return result;
            break;
        default:
            result[2] = INVALID;
            return result;
    }
}