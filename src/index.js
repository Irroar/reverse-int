module.exports = function reverse (n) {
    let numberStr = ''
    if (n < 0) { numberStr = n.toString().split('').slice(1); }
    else { numberStr = n.toString().split(''); }
    
    let reversedString = [];
    for (let i = 0; i < numberStr.length; i++) {
        reversedString.unshift(numberStr[i])
    }
    return Number.parseInt(reversedString.join(''))
}

