import { getCatImage } from "../services/catServices"
import { useEffect, useState } from "react"

export function useCatImage({word}) {
    const [blobURL, setBlobURL] = useState(null);

    useEffect(() => {

        if (!word) return

        //Fectch image from first word in loaded fact
        getCatImage({word}).then(url => setBlobURL(url))
        
    }, [word])

    return {blobURL}
}