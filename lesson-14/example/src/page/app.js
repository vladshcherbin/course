// get element by id, change styles
const header = document.getElementById('header')

header.style.color = '#ffff57'
header.style.fontSize = '20px'
header.style.fontWeight = 700
header.style.marginBottom = '24px'

// get elements by class name, change styles
const news = document.getElementsByClassName('news-article')
const newsArray = [...news]

newsArray.forEach((article) => {
  article.style.color = '#ffff57'
})

// get elements by class name, change contents
const messages = document.getElementsByClassName('message')
const secondMessage = messages[1]

console.log('second message', secondMessage)
console.log('update second message')

secondMessage.textContent = 'updated message'

function makeThirdMessageFancy() {
  messages[2].classList.add('fancy-style')
}

function toggleThirdMessageFancy() {
  messages[2].classList.toggle('fancy-style')
}

function updateFourthMessageHtml() {
  messages[3].innerHTML = '<em>message :)</em>'
}

function addNewMessage(message) {
  const newMessage = document.createElement('p')

  newMessage.textContent = message

  document.querySelector('aside ul').appendChild(newMessage)
}
