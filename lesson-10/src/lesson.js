const name = 'Alex'
const age = 18
const isOnline = true
const unknownValue = undefined
const nullishValue = null

console.log(`my friend name is ${name}`)

// if else, switch
if (age >= 18) {
  console.log('he is adult')
} else if (age >= 13) {
  console.log('he is teenager')
} else {
  console.log('he is child')
}

switch (isOnline) {
  case true:
    console.log('he is online')
    break
  case false:
    console.log('he is offline')
    break
  default:
    console.log('his status is unknown')
    break
}

// loop for
for (let index = 0; index <= 5; index = index + 1) {
  console.log(`for loop index is - ${index}`)
}

// objects and arrays
const person = {
  address: {
    flat: 1,
    index: 220000,
    street: 'Bogdanovicha',
  },
  age: 18,
  isMarried: null,
  isOnline: true,
  name: 'Alex'
}

console.log('full information:')
console.log(person)
console.log(`just the street: ${person.address.street}`)

const people = [
  person,
  { name: 'Jack', age: 20 },
  null
]

console.log(`Alex age is ${people[0].age}`)
console.log(`Jack age is ${people[1].age}`)

// functions
function sum(aValue, bValue) {
  const result = aValue + bValue

  return result
}

const sumOfOneAndTwo = sum(1, 2)

console.log(`must be three: ${sumOfOneAndTwo}`)
