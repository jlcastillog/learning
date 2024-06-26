import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

async function fecthData(urlApi) {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

const anotherFn = async (urlApi) => {
    try{
        const products = await fecthData(`${urlApi}/products`)
        const product = await fecthData(`${urlApi}/products/${products[0].id}`)
        const category = await fecthData(`${urlApi}/categories/${product.category.id}`)

        console.log(products[0])
        console.log(product.title)
        console.log(category.name)

    } catch (error) {
        console.log(error)
    }
}

anotherFn(API)