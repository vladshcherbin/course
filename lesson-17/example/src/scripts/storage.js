// set items
window.localStorage.setItem('name', 'Alex')
window.localStorage.setItem('age', 20)
window.localStorage.setItem('address', JSON.stringify({ street: 'Kulman' }))

// get items
console.log('localStorage name', window.localStorage.getItem('name'))
console.log('localStorage age', Number(window.localStorage.getItem('age')))
console.log('localStorage address', JSON.parse(window.localStorage.getItem('address')))
console.log('localStorage girlfriend', window.localStorage.getItem('girlfriend'))

// remove item
window.localStorage.removeItem('age')

// clear all
// window.localStorage.clear()

// session storage
window.sessionStorage.setItem('name', 'Jim')

console.log('sessionStorage name', window.sessionStorage.getItem('name'))

// получить пользователя по ссылке https://dummyjson.com/users/17
// сохранить его в localStorage или sessionStorage
// при загрузке страницы добавить условие:
// если пользователь есть или там, или там - не перезапрашивать, а вывести из хранилища в консоль
// если пользователя нет - получить, сохранить и вывести в консоль

// localStorage и sessionStorage являются глобальными свойствами объекта window в браузере
async function fetchUserById(userId) {
  const response = await fetch(`https://dummyjson.com/users/${userId}`)

  return response.json()
}

const existingUser = localStorage.getItem('user-17')

if (existingUser) {
  console.log('user 17 information exists', JSON.parse(existingUser))
} else {
  console.log('user 17 information does not exist, fetching...')

  const user = await fetchUserById(17)

  localStorage.setItem('user-17', JSON.stringify(user))
}
