function caesarCipher (str){
    if(typeof str === 'string'){
        let arrStr = str.split('')
        const regexMayus = /[A-Z]/
        const regex = /[a-z]/
        let cipherChar
        let cipherString = []
        arrStr.forEach(char => {
            if(char.match(regexMayus)){
                char = char.toLowerCase()
                cipherChar = nextChar(char)
                cipherChar = cipherChar.toUpperCase()
                cipherString.push(cipherChar)
            }else if(char.match(regex)){
                cipherChar = nextChar(char)
                cipherString.push(cipherChar)
            }else{
                cipherString.push(char)
            }
        });
        return cipherString.join('')
    }return null
}

function nextChar(char){
    const arrABC = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let nextLetter = arrABC.find((letter, i) => {
        if (letter === char) {
          return true;
        }
      });
    
    return nextLetter === 'z' ? 'a' : arrABC[arrABC.indexOf(nextLetter) + 1];
}



module.exports = caesarCipher
