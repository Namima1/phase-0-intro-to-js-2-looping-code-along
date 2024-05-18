//build function writeCards that accepts two arguments.
//array of string names and event name
//create for loop with counter starting at 0 and increments at the end of each loop
//for loop should stop once it has iterated over length of array 
//create custom message for each name inside loop, collect them in new array


function writeCards(names, event) {
    const messages = [];

    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }

    return messages;
}

const thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");

console.log(thankYouMessages);



function countDown(number) {
    if (number < 0 || !Number.isInteger(number)) {
        console.log("Please provide a positive integer.");
        return;
    }

    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}

countDown(10);