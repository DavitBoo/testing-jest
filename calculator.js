const calculator = {

    add(num1, num2){
        return num1 + num2
    },

    subtract(num1, num2){
        return num1 - num2
    },

    divide(num1, num2){
        return num1 / num2
    },

    multiply(num1, num2){
        return num1*num2
    }


}

console.log(calculator.add(2,2)) 
console.log(calculator.subtract(2,2)) 
console.log(calculator.multiply(2,2)) 
console.log(calculator.divide(2,2)) 

module.exports = calculator;