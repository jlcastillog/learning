import { URL_CAT_IMAGES } from "./constants"
import { useState, useEffect } from "react"

export function CatImage({word}) {

    const [blobURL, setBlobURL] = useState(null);

    useEffect(() => {
        //Fectch image from first word in loaded fact
        fetch(`${URL_CAT_IMAGES}${word}`)
            .then(res => res.blob())
            .then(blob => setBlobURL(URL.createObjectURL(blob)))
    }, [word])

    return (blobURL ? <img src={blobURL} alt={`Image of cat loaded with word ${word}`}/> : <p>Loading...</p>)
}