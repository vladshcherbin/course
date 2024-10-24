document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()

  console.log('name', document.querySelector('input[name="name"]').value || 'unknown')
  console.log('age', document.querySelector('input[name="age"]').value || 'unknown')
})
