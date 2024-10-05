const firstName = 'Alex'
const age = 18

// Scope
function showPersonInfo() {
  const surname = 'Smith'

  console.log(`Name: ${firstName}, Surname: ${surname}, Age: ${age}`)
}

// firstName доступна вне функции т.к. она объявлена в глобальной области видимости
// surname не доступна т.к. она объявлена внутри функции
console.log(firstName) // Alex
// console.log(surname) // Ошибка: surname is not defined

showPersonInfo()

// Properties and methods
console.log(firstName.toLowerCase()) // alex
console.log(firstName.toUpperCase()) // ALEX

// Arrays
const fruits = ['apple']

console.log(fruits[0]) // apple

fruits.push('banana')
fruits.unshift('orange')

console.log(fruits) // ['orange', 'apple', 'banana']

if (fruits.includes('apple')) {
  console.log('Apple is in the list')
}
