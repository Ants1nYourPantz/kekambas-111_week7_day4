console.log("Hello world!");

var capitals = function (word) {
    let result = []
    for (let i = 0; i < word.length; i++){
        if (word[i] === word[i].toUpperCase()){
            result.push(i)
        }
    };
    return result
};
// console.log(capitals('CodEWaRs'))

function capital(word){
    let letters = word.split('')
    return letters
}
console.log(capital('CodEWaRs'))
