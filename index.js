function writeCards(names=["Ali", "Mukhtar", "Khidhr"], events = "birthday") {
    let returnArray = [];
    for(let i = 0; i < names.length; i++) {
        returnArray[i] = `Thank you, ${names[i]}, for the wonderful ${events} gift!`
    }
    return returnArray;
}
console.log(writeCards())

function countDown(int) {
    while (int>= 0) {
        console.log(int)
        int--
    }
}
countDown(10) 