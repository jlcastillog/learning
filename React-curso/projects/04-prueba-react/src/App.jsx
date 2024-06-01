import { useState, useEffect } from "react"
import { URL_FACTS } from "./constants"
import { CatImage } from "./CatImage"
import './App.css'


export function App () {
    const [fact, setFact] = useState()
    const [firstWord, setFirstWord] = useState()

    useEffect(() => {
        //Fectch random fact
        fetch(URL_FACTS)
            .then(response => response.json())
            .then(data => {
                setFact(data.fact)
                setFirstWord(data.fact.split(' ')[0])
            })
    }, [])

    return (
        <main>
            <h1>App gatitos</h1>
            {fact && <p>{fact}</p>}
            <CatImage word={firstWord} />
        </main>
    )
}