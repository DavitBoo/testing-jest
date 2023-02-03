function analyzeArray(numbers) {
    
    const object = {
        average: average(numbers),
        min: Math.min(...numbers),
        max: Math.max(...numbers),
        length: numbers.length
    }

    return object

}

function average(array){
    let sum = array.reduce( (acc, elem) => {
        acc = acc+elem
        return acc
    }, 0)
    return sum/array.length
}

console.log(analyzeArray([12, 0, 6, 1]))

module.exports = analyzeArray

