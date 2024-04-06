import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

function fetchData (urlApi) {
    return fetch(urlApi)
}

fetchData (`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products[0])
        return fetchData(`${API}/products/${products[0].id}`)   
    })
    .then(response => response.json())
    .then(product => {
        console.log(`Product: ${product.title}`)
        return fetchData(`${API}/categories/${product?.category?.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(`Category ${category.name}`)
    })
    .catch(error => console.log(error))
    .finally(() => console.log('End'))

