// Code your solutions in this file

/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Bday to me!`);
    debugger;
}
*/

/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(param) {
    for (let i = 0; i < param.length; i++) {
        console.log(`Wrapped ${param[i]} and added a bow!`);
        debugger;
    }
    
    return param;
}

wrapGifts(gifts);
*/

const arrayOfNames = [];

function writeCards(param1) {
    let newArrayOfNames = [];
    for (let i = 0; i < param1.length; i++) {
        newArrayOfNames.push(`Thank you, ${param1[i]}, for the wonderful surprise gift!`);
        console.log(newArrayOfNames);
    }

    return newArrayOfNames;
}

function countDown(providedNumber) {
    for (let i = providedNumber; i >= 0; i--) {
        console.log(i);
    }
}