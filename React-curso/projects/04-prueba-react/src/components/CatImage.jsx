import { useCatImage } from "../hooks/useCatImage"

export function CatImage({word}) {

    const {blobURL} = useCatImage({word})

    return (blobURL ? <img src={blobURL} alt={`Image of cat loaded with word ${word}`}/> : <p>Loading...</p>)
}