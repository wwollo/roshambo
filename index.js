function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
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
            return 'Something went wrong.';
            break;
    }
}