function writeCards(names, eventName){
    let messagesArray = []
    for(let i = 0; i < names.length; i ++){
        messagesArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messagesArray;
}

function countDown(num){
    let i = num
    while (i >= 0){
        console.log(i)
        i -= 1;
    }
}