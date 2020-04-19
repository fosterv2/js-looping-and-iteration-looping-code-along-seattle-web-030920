// Code your solutions in this file
function writeCards(names, event) {
    for (let index = 0; index < names.length; index++) {
        names[index] = `Thank you, ${names[index]}, for the wonderful ${event} gift!`;
    }
    return names;
}

function countdown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}