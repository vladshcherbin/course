function executeFunction(throwError) {
  console.log('execute function')

  if (throwError) {
    throw new Error('something bad happened')
  }
}

try {
  executeFunction(true)
} catch (error) {
  console.log('error :(')
} finally {
  console.log('finally is always executed')
}

console.log('message after error catch')

// for...in
const person = { name: 'alex', age: 10 }

console.log('for...in:')
// eslint-disable-next-line no-restricted-syntax, guard-for-in
for (const objectKey in person) {
  console.log(objectKey)
}

console.log('Object.keys:')

Object.keys(person).forEach((key) => {
  console.log(key)
})

// for...of
const numbers = [1, 2]

console.log('for...of:')

for (const value of numbers) {
  console.log(value)
}

console.log('forEach:')

numbers.forEach((number) => {
  console.log(number)
})

// array check
console.log(Array.isArray(numbers))

// promise
function checkNumber(number, duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number < 10) {
        resolve(`number is okay: ${number}`)
      } else {
        reject(new Error(`number is bad ${number}`))
      }
    }, duration)
  })
}

async function checkNumbers() {
  const resultAll = await Promise.all([
    checkNumber(1, 100),
    checkNumber(2, 2000),
    checkNumber(3, 300)
  ])

  console.log(resultAll)

  const resultAllSettled = await Promise.allSettled([
    checkNumber(1, 100),
    checkNumber(2, 2000),
    checkNumber(3, 300)
  ])

  console.log(resultAllSettled)

  const resultAny = await Promise.any([
    checkNumber(20, 100),
    checkNumber(2, 100),
    checkNumber(3, 300)
  ])

  console.log(resultAny)

  const resultRace = await Promise.race([
    checkNumber(1, 3000),
    checkNumber(2, 2000),
    checkNumber(3, 300)
  ])

  console.log(resultRace)
}

checkNumbers()

// get three products using fetch and log them to console
async function fetchProductById(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  const product = await response.json()

  return product
}

async function fetchProducts() {
  const products = await Promise.all([
    fetchProductById(1),
    fetchProductById(2),
    fetchProductById(3)
  ])

  console.log(products)
}

// fetch products after 6 seconds
setTimeout(() => {
  fetchProducts()
}, 6000)
