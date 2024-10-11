const products = [
  { name: 'Product 1', price: 100 },
  { name: 'Product 2', price: 700 },
  { name: 'Product 2', price: 1000 }
]

// .at
console.log(products.at(2))
console.log(products.at(-2))

// .reduce
const updatedProducts = products.reduce((result, value) => {
  console.log('current result:', result)
  console.log('value:', value)

  if (value.price < 500) {
    // don't add to result
    return result
  }

  // add to result
  result.push({
    ...value,
    price: value.price * 2
  })

  return result
}, [])

console.log('updated products', updatedProducts)

// .some
console.log('some', products.some((product) => product.price > 150))

// .every
console.log('every', products.every((product) => product.price > 150))

// spread operator
const months = ['март', 'апрель', 'май']
const summer = ['июнь', 'июль', 'август']

const allMonths = [...months, ...summer]

console.log('all months', allMonths)

// object methods
const person = {
  name: 'John',
  age: 30,
  job: 'developer'
}

console.log('person', person)
console.log('keys', Object.keys(person))
console.log('values', Object.values(person))
console.log('entries', Object.entries(person))

const objectEntries = Object.entries(person)
const objectFromEntries = Object.fromEntries(objectEntries)

console.log('object from entries', objectFromEntries)

// task
// функция, которая принимает объект (person)
// и возвращает новый объект, в котором возраст увеличен на 10
// и добавлено новое поле isAdult, которое равно true, если возраст > 18
// и удалим поле job

// update using object methods
function updatePerson(initialPerson) {
  const entries = Object.entries(initialPerson)
  const entriesWithoutJob = entries.filter((entry) => entry[0] !== 'job')
  const entriesWithAdultState = [
    ...entriesWithoutJob,
    ['isAdult', initialPerson.age > 18]
  ]
  const entriesWithIncreasedAge = entriesWithAdultState.map((entry) => {
    if (entry[0] === 'age') {
      return [entry[0], entry[1] + 10]
    }

    return entry
  })

  console.log(entriesWithoutJob)
  console.log(entriesWithAdultState)
  console.log(entriesWithIncreasedAge)

  return Object.fromEntries(entriesWithIncreasedAge)
}

console.log(updatePerson(person))

// ...rest in array destructuring
const entry = ['age', 30, 'job', 'developer']
const [firstValue, secondValue, ...rest] = entry

// const firstValue = entry[0]
// const secondValue = entry[1]

console.log(firstValue)
console.log(secondValue)
console.log(rest)

// ...rest in object destructuring
const { name, ...restFields } = person

// const name = person.name

console.log(name)
console.log(restFields)

// update using destructuring
function updatePersonUsingDestructuring(initialPerson) {
  const { job, ...restPersonFields } = initialPerson

  return {
    ...restPersonFields,
    age: restFields.age + 10,
    isAdult: restFields.age > 18
  }
}

console.log(person)
console.log(updatePersonUsingDestructuring(person))

// object destructuring
products.forEach(({ price }) => {
  console.log(price)
})

// try / catch
function functionWithError() {
  console.log('before error')

  throw new Error('error from test')

  console.log('after error')
}

try {
  functionWithError()

  console.log('no error')
} catch (error) {
  console.log('error in catch', error)
}

// sync / async
console.log('step 1')
console.log('step 2')

// callback (hell)
setTimeout(() => {
  setTimeout(() => {
    console.log('step 4')
  }, 3000)
}, 2000)

console.log('step 5')

// promise
function longImageRequestFunction() {
  return new Promise((resolve, reject) => {
    // imaginary long function
    // const imageResponse = requestImage()

    // if (imageResponse.success) {
    //   resolve('done', imageResponse.image)
    // } else {
    //   reject('error during image request')
    // }
  })
}

longImageRequestFunction()
  .then((result) => {
    console.log('result', result)
  })
  .catch((error) => {
    console.log('error', error)
  })

// async / await
async function getRate() {
  const response = await fetch('https://money.onliner.by/sdapi/kurs/api/bestrate?currency=USD&type=nbrb')
  const rate = await response.json()

  console.log('rate from onliner', rate)

  return rate
}

getRate()
