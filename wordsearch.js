const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = [];
    for(let i = 0; i < letters[0].length; i++) {
        let column = ''
        for(let ii = 0; ii < letters.length; ii++) {
            column += letters[ii][i];
            
            }
            verticalJoin.push(column)    
        }
        console.log("vertical", verticalJoin)
        const arr = horizontalJoin.concat(verticalJoin);
        console.log("arr",arr)
        for (l of arr) {
            if (l.includes(word)) {
                return true
            }
        }
  
    return false;
}


console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'EZKFQUAL'))
  
module.exports = wordSearch