async function basicFetchExample() {
  // получить ответ от сервера по ссылке
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!response.ok) {
    // что-то пошло не так - сервер вернул ошибку, сетевая ошибка и т.д.
    throw new Error('Failed to fetch data')
  }

  // преобразовать ответ сервера в json
  const data = await response.json()

  console.log(data)

  // сохранить в переменную и вывести массив заголовков статей из данных
  const postTitles = data.map((post) => post.title)

  console.log(postTitles)
}

// 1
// используя fetch, получить рецепты по ссылке
// https://dummyjson.com/recipes
// вывести рецепт с индексом 5 в консоль
async function fetchRecipeWithIndexOfFive() {
  const response = await fetch('https://dummyjson.com/recipes')
  const data = await response.json()
  const recipiesArray = data.recipes
  const recipe = recipiesArray[5]

  console.log(recipe)
}

// 2
// каждый рецепт это объект, в котором есть поле id и другие поля
// вывести рецепт с полем id, равным 5
// (поможет метод find, который ищет элемент в массиве по условию)
// true if id === 5 else false
async function fetchRecipeWithIdOfFive() {
  const response = await fetch('https://dummyjson.com/recipes')
  const data = await response.json()
  const recipeWithIdOfFive = data.recipes.find((recipe) => recipe.id === 5)

  console.log(recipeWithIdOfFive)
}

// 2.1
// вывести рецепт с полем name, равным 'Lebanese Falafel Wrap'
async function fetchRecipeWithNameOfLebanese() {
  const response = await fetch('https://dummyjson.com/recipes')
  const data = await response.json()
  // object destructuring
  const recipe = data.recipes.find(({ name }) => name === 'Lebanese Falafel Wrap')

  console.log(recipe)
}

// 3
// используя рецепт с полем id, равным 5
// вывести в консоль поле tags у этого рецепта
// ожидаемый ответ - [ 'Chicken', 'Salsa' ]
async function fetchRecipeWithIdOfFiveTags() {
  const response = await fetch('https://dummyjson.com/recipes')
  const data = await response.json()
  const recipe = data.recipes.find(({ id }) => id === 5)

  console.log(recipe.tags)
}

// 4
// используя fetch, написать функцию, которая принимает параметр query
// и выводит рецепты по запросу с этим параметром query
// https://dummyjson.com/recipes/search?q={query}
// где query - строка поиска
// вывести результат проверки по query = Margherita
async function fetchRecipesByQuery(query) {
  const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`)
  const data = await response.json()

  return data.recipes
}

// 5
// используя функцию из пункта 4, получить рецепты по Margherita и по Vegetarian
// выполнить сначала запрос по Margherita и вывести результат
// выполнить второй запрос по Vegetarian и вывести результат

// 6
// выполнить оба запроса из 5 задания одновременно используя Promise.all
// вывести результат

// 7
// получить рецепт с id = 7 по ссылке
// https://dummyjson.com/recipes/7
// взять теги из поля tags этого рецепта
// получить количество рецептов по каждому из тегов по ссылке
// https://dummyjson.com/recipes/tag/{tag}
// где tag - название тега из рецепта
// вывести рецепт в формате
// {
//  id: 7, // id рецепта
//  title: 'Tomato Basil Bruschetta', // name рецепта
//  recipesWithSameTags: {
//    Bruschetta: 2, // количество рецептов с тегом Bruschetta
//    Italian: 6 // количество рецептов с тегом Italian
//  }
// }
async function fetchRecipeById(recipeId) {
  const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
  const recipe = await response.json()

  return recipe
}

async function fetchRecipesCountByTag(tag) {
  const response = await fetch(`https://dummyjson.com/recipes/tag/${tag}`)
  const recipesByTag = await response.json()

  return recipesByTag.recipes.length
}

async function fetchRecipeWithTags(recipeId) {
  // получаем рецепт по id = 7
  const recipe = await fetchRecipeById(recipeId)
  const recipeTags = recipe.tags // [ 'Bruschetta', 'Italian' ]

  console.log('tags', recipeTags)

  // получаем количество рецептов по этим тегам одновременно используя Promise.all
  // Promise.all принимает массив промисов (fetch запросов) в формате [ fetch1, fetch2 ]
  // каждый fetch1-2 запрос это fetchRecipesCountByTag, в который передается тег
  // ожидаемый массив [ fetchRecipesCountByTag('Bruschetta'), fetchRecipesCountByTag('Italian') ]
  // остаётся преобразовать массив recipeTags в этот ожидаемый массив
  const recipeTagsCountFetchArray = recipeTags.map((tag) => fetchRecipesCountByTag(tag))

  console.log('array of tag count fetches', recipeTagsCountFetchArray)

  const recipeWithSameTagsCount = await Promise.all(recipeTagsCountFetchArray)

  console.log('same tag recipes count', recipeWithSameTagsCount)

  // формируем объект с данными в формате { Bruschetta: 2, Italian: 6 } из
  // - массива тегов recipeTags
  // - массива recipeWithSameTagsCount с количеством рецептов по тегам
  // для создания объекта используем метод Object.fromEntries
  // Object.fromEntries принимает массив массивов, где каждый массив это пара ключ-значение
  // в нашем случае ожидаемые массивы [ 'Bruschetta', 2 ] и [ 'Italian', 6 ]
  // остаётся преобразовать массив recipeTags в массив с этими ожидаемыми массивами
  // значения 2 и 6 берём по индексу из массива recipeWithSameTagsCount
  const recipesCountWithSameTags = Object.fromEntries(
    recipeTags.map((tag, index) => [tag, recipeWithSameTagsCount[index]])
  )

  console.log('recipes count with same tags', recipesCountWithSameTags)

  // формируем объект с данными в нужном формате
  const recipeWithTagsCount = {
    id: recipe.id,
    title: recipe.name,
    recipesWithSameTags: recipesCountWithSameTags
  }

  console.log('recipe with recipes by tags count', recipeWithTagsCount)
}

async function executeExamples() {
  console.log('Basic fetch example')

  await basicFetchExample()

  console.log('1. Fetch recipe with index of 5')
  await fetchRecipeWithIndexOfFive()

  console.log('2. Fetch recipe with id of 5')
  await fetchRecipeWithIdOfFive()

  console.log('2.1. Fetch recipe with name of Lebanese Falafel Wrap')
  await fetchRecipeWithNameOfLebanese()

  console.log('3. Fetch recipe with id of 5 tags')
  await fetchRecipeWithIdOfFiveTags()

  console.log('4. Fetch recipes by query Margherita')
  const recipesByQuery = await fetchRecipesByQuery('Margherita')
  console.log(recipesByQuery)

  console.log('5. Fetch recipe by query Margherita, next by Vegetarian')
  const recipesByQueryMargherita = await fetchRecipesByQuery('Margherita')
  console.log(recipesByQueryMargherita)

  const recipesByQueryVegetarian = await fetchRecipesByQuery('Vegetarian')
  console.log(recipesByQueryVegetarian)

  console.log('6. Fetch recipes by query Margherita and Vegetarian using Promise.all')
  const recipesByBothQueries = await Promise.all([
    fetchRecipesByQuery('Margherita'),
    fetchRecipesByQuery('Vegetarian')
  ])
  // by margherita - recipesByBothQueries[0]
  // by vegetarian - recipesByBothQueries[1]

  console.log(recipesByBothQueries)

  console.log('7. Fetch recipe by id 7 with tags')
  await fetchRecipeWithTags(7)
}

executeExamples()
