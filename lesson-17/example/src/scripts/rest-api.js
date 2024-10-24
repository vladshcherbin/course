// get single product
async function getProduct() {
  const response = await fetch('https://dummyjson.com/products/1', {
    method: 'GET'
  })

  return response.json()
}

console.log('product with id 1', await getProduct())

// add product
async function addProduct() {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      title: 'my awesome product'
    })
  })

  return response.json()
}

console.log('added product', await addProduct())

// update product
async function updateProduct() {
  const response = await fetch('https://dummyjson.com/products/2', {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      title: 'my updated awesome product',
      price: 100
    })
  })

  return response.json()
}

console.log('updated product', await updateProduct())

// delete product
async function deleteProduct() {
  const response = await fetch('https://dummyjson.com/products/3', {
    method: 'DELETE'
  })

  return response.json()
}

console.log('deleted product', await deleteProduct())

// 1. получить пользователей и отобразить в консоль
// 2. добавить пользователя с любым именем
// после добавления, обновить массив из первого задания,
// добавив в него только что созданного пользователя
// 3. отобразить итоговый массив пользователей

async function getUsers() {
  const response = await fetch('https://dummyjson.com/users')
  const { users } = await response.json()

  return users
}

async function addUser() {
  const response = await fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      firstName: 'Kim'
    })
  })

  return response.json()
}

const users = await getUsers()
const newUser = await addUser()

console.log('all users', users)
console.log('added user', newUser)

const updatedUsers = [
  ...users,
  newUser
]

console.log('updated users', updatedUsers)
