// Methods that iterate over an array
// Methos that DO NOT modify the origianl array (Immutability)

// map()

const numbers = [1, 2, 3 ,4 ,5]
const squareNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squareNumbers)

// foreach()

const colors = ['red', 'blue', 'green']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

// filter()

const numbersFilter = [2, 3,4 , 5, 8, 9, 10]
const eventNumbers = numbersFilter.filter(number => number % 2 === 0)

console.log(numbersFilter)
console.log(eventNumbers)

// reduce()

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce)
console.log(sum)

// reduce() case 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']
const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }

    return accumulator
}, {})

console.log(words)
console.log(wordFrecuency)