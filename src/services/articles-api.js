 export function fetchArticles(name, page) {

  const API_KEY = '21713789-8b1a276c02e035b978d6c9e58';
  const BASE_URL = 'https://pixabay.com/api/';
  
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=${name}&image_type=photo&page&per_page=12&page=${page}`,
  ).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(new Error(`Нет изображения с именем ${name.tags}`))
  })
}