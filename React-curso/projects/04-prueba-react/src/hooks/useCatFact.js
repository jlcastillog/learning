import { getCatFact } from "../services/catServices"
import { useEffect, useState } from "react"

export function useCatFact() {
    const [fact, setFact] = useState()
    const [firstWord, setFirstWord] = useState()

    useEffect(() => {
        //Fectch random fact
        getCatFact().then((newFact) => {
            setFact(newFact)
            setFirstWord(newFact.split(' ')[0])
        })
    }, [])

    return {fact, firstWord}
}

