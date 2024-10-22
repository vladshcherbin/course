/* eslint-disable no-alert, no-restricted-globals */

// 1. create new aside element as first child of body
const asideElement = document.createElement('aside')

asideElement.innerHTML = `
  <ul class="list">
    <li>январь</li>
    <li>февраль</li>
    <li>март</li>
  </ul>
`

document.querySelector('body').prepend(asideElement)

// 2. create new list on button click
const createListSection = document.querySelector('.create-new-list')

function createNewList() {
  const element = document.createElement('ul')

  element.innerHTML = `
    <li>тигр</li>
    <li>кролик</li>
  `

  createListSection.appendChild(element)
}

createListSection.querySelector('button').addEventListener('click', createNewList)

// 3. create and update new list on button click
const createAndUpdateListSection = document.querySelector('.create-and-update-new-list')

function createAndUpdateNewList() {
  const element = document.createElement('ul')

  createAndUpdateListSection.appendChild(element)

  element.outerHTML = `
    <ul class="updated">
      <li>собака</li>
      <li>кошка</li>
    </ul>
  `
}

createAndUpdateListSection.querySelector('button').addEventListener('click', createAndUpdateNewList)

// 4. addEventListener and removeEventListener
function logGreeting() {
  console.log('привет')
}

const logMessageButton = document.querySelector('.log-message-timeout button')

logMessageButton.addEventListener('click', logGreeting)

setTimeout(() => {
  logMessageButton.removeEventListener('click', logGreeting)
}, 5000)

// 5. получить пользователя по ссылке https://dummyjson.com/users/1
// вывести firstName и lastName на страничку, создав карточку пользователя
// получение пользователя и создание карточки происходит при нажатии на кнопку
const fetchUserSection = document.querySelector('.fetch-user')
const fetchUserButton = fetchUserSection.querySelector('button')

async function fetchUser() {
  const response = await fetch('https://dummyjson.com/users/1')
  const { firstName, lastName } = await response.json()
  const userCardElement = document.createElement('article')

  userCardElement.innerHTML = `
    <p>имя: ${firstName}</p>
    <p>фамилия: ${lastName}</p>
  `

  fetchUserSection.prepend(userCardElement)
}

fetchUserButton.addEventListener('click', fetchUser)

// 6. event.stopPropagation()
document.querySelector('.top').addEventListener('click', () => {
  console.log('всплыло событие click у .top')
})

document.querySelector('.middle').addEventListener('click', () => {
  console.log('всплыло событие click у .middle')
})

document.querySelector('.bottom').addEventListener('click', (event) => {
  event.stopPropagation()

  console.log('всплыло событие click у .bottom')
})

document.querySelector('.bottom button').addEventListener('click', () => {
  console.log('сработало событие click у button')
})

// 7. input events
const inputEventsField = document.querySelector('.input-events input')

inputEventsField.addEventListener('focus', () => { console.log('событие focus') })
inputEventsField.addEventListener('blur', () => { console.log('событие blur') })
inputEventsField.addEventListener('input', (event) => {
  console.log('событие input', event.target.value)
})
inputEventsField.addEventListener('change', (event) => {
  console.log('событие change', event.target.value)
})
inputEventsField.addEventListener('keydown', (event) => {
  console.log('событие keydown', event.target.value)
})
inputEventsField.addEventListener('keyup', (event) => {
  console.log('событие keyup', event.target.value)
})

// 8. form events
document.querySelector('.prevent-default form').addEventListener('submit', (event) => {
  event.preventDefault()

  console.log('событие submit отключено')
})

// 9. fetch user by id
const fetchUserByIdSection = document.querySelector('.fetch-user-by-id')

async function fetchUserById() {
  const userId = fetchUserByIdSection.querySelector('input').value
  const response = await fetch(`https://dummyjson.com/users/${userId}`)
  const { firstName, lastName } = await response.json()
  const userCardElement = document.createElement('article')

  userCardElement.innerHTML = `
    <p>имя: ${firstName}</p>
    <p>фамилия: ${lastName}</p>
  `

  fetchUserByIdSection.appendChild(userCardElement)
}

fetchUserByIdSection.querySelector('button').addEventListener('click', fetchUserById)

// 10. useful functions
document.querySelector('.useful-functions button:nth-of-type(1)').addEventListener('click', () => {
  alert('приветики')
})

document.querySelector('.useful-functions button:nth-of-type(2)').addEventListener('click', () => {
  const result = confirm('сыграем в игру?')

  if (result) {
    alert('игра началась')
  } else {
    alert('сыграем в другой раз')
  }
})

document.querySelector('.useful-functions button:nth-of-type(3)').addEventListener('click', () => {
  const result = prompt('твой любимый фильм?')

  if (result) {
    alert(`${result}, так и знал!`)
  } else {
    alert('видимо это секрет')
  }
})

// 11. useful properties
const usefulPropertiesList = document.querySelector('.useful-properties ul')

usefulPropertiesList.firstElementChild.style.color = '#ffff57'
usefulPropertiesList.lastElementChild.style.textDecoration = 'underline'
usefulPropertiesList.children[1].style.paddingLeft = '16px'
usefulPropertiesList.parentElement.style.borderRight = '1px solid #ffff57'
usefulPropertiesList.previousElementSibling.style.textAlign = 'right'
usefulPropertiesList.nextElementSibling.style.textAlign = 'center'
