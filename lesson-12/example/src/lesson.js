// operators
console.log(2 ** 3)

let quantity = 5

quantity *= 2

console.log(quantity)

//
const booleanAsString = 'true'
const convertedBoolean = Boolean(booleanAsString)

console.log('string', booleanAsString)
console.log('boolean', convertedBoolean)

//
const nonEmptyString = 'yolo'

if (nonEmptyString.length) {
  console.log('string is not empty')
}

// while
let sum = 0

while (sum !== 5) {
  console.log(sum)

  sum += 1

  if (sum === 2) {
    break
  }
}

// functions
function greet() {
  console.log('hi')
}

greet()

function greetPerson(name) {
  console.log(`hi ${name}`)
}

greetPerson('Alex')

function greetPersonWithDefault(name = 'Jack') {
  console.log(`hi ${name}`)
}

greetPersonWithDefault()

// eslint-disable-next-line func-names
const anonymousGreet = function (name) {
  console.log(`hi ${name}`)
}

anonymousGreet('Sam')

const arrowGreet = (name) => {
  console.log(`hi ${name}`)
}

arrowGreet('Jim')

// 1. написать функцию сложения двух чисел
// 2. написать функцию вычитания двух чисел
// 3. написать функцию, которая принимает 3 параметра
// 1 параметр - число
// 2 параметр - число
// 3 параметр - функция операции с этими числами (либо сложение, либо вычитание)
// функцию возвращает результат

function add(a, b) {
  return a + b
}

const substract = (a, b) => a - b

function calculate(c, d, operation) {
  return operation(c, d)
}

console.log('2 + 4 =', calculate(2, 4, add))
console.log('2 - 4 =', calculate(2, 4, substract))

// closure
function createCounter() {
  let count = 0

  return () => {
    count += 1

    return count
  }
}

const firstCounter = createCounter()

console.log('one', firstCounter())
console.log('two', firstCounter())
console.log('three', firstCounter())

// recursion
function increaseByOne(value) {
  console.log(value)

  if (value === 5) {
    return value
  }

  const increasedValue = value + 1

  return increaseByOne(increasedValue)
}

console.log('increase by 1 from 0, until 5', increaseByOne(0))

// arrays
const initialArray = [1, 2, 3]

initialArray.forEach((value) => {
  console.log('array value', value)
})

const mapResult = initialArray.map((value) => {
  console.log('initial array value', value)

  return value + 1
})

console.log('increased result', mapResult)

const filterResult = initialArray.filter((value) => {
  if (value !== 2) {
    return true
  }

  return false
})

console.log('filtered result without 2', filterResult)

// есть исходный массив с товарами
const products = [
  { name: 'Product 1', price: 10, quantity: 5 },
  { name: 'Product 2', price: 20, quantity: 0 },
  { name: 'Product 3', price: 30, quantity: 10 }
]

// написать функцию, которая принимает массив товаров
// возвращает новый массив товаров, в котором
// нет товаров, где количество = 0
// в каждом объекте товара дожно добавиться поле total
// значение total = price * quantity

// итоговый массив
// [
//   { name: 'Product 1', price: 10, quantity: 5, total: 50 },
//   { name: 'Product 3', price: 30, quantity: 10, total: 300 }
// ]

// solution
const result = products
  .filter((product) => product.quantity > 0)
  .map((product) => ({
    ...product,
    total: product.price * product.quantity
  }))

console.log('products result', result)

// spread operator
const numbers = [1, 2, 3]
const newNumbers = [4, ...numbers]

console.log('new numbers', newNumbers)

const person = { name: 'Alex' }
const imposter = { ...person, age: 20, name: 'Jim' }

console.log('person', person)
console.log('imposter', imposter)

// sort
const initialNumbers = [1, 4, 2, 3]
const sortedNumbersAsc = initialNumbers.toSorted((a, b) => a - b)
const sortedNumbersDesc = initialNumbers.toSorted((a, b) => b - a)

console.log('initial numbers', initialNumbers)
console.log('sorted asc', sortedNumbersAsc)
console.log('sorted desc', sortedNumbersDesc)

// find
console.log('find 2', initialNumbers.find((number) => number === 4))
console.log('find 5', initialNumbers.find((number) => number === 5))

// includes
console.log('includes 2', initialNumbers.includes(2))
console.log('includes 6', initialNumbers.includes(6))

// reverse
console.log('reversed', initialNumbers.toReversed())
console.log('initial numbers are not changed', initialNumbers)
