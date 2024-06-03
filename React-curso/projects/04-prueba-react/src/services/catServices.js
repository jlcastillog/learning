import { URL_CAT_IMAGES, URL_FACTS } from "../constants"

export const getCatImage = async ({word}) => {

    console.log(word)

    const res = await fetch(`${URL_CAT_IMAGES}${word}`)
    const blob = await res.blob()

    return URL.createObjectURL(blob)
}

export const getCatFact = async () => {

    const res = await fetch(URL_FACTS)
    const data = await res.json()

    return data.fact
}