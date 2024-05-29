import { useState, useEffect } from "react"
import { URL_FACTS } from "./constants"


export function App () {

    const [fact, setFact] = useState('Hecho gracioso de gatitos')

    useEffect(() => {
        //Fectch random fact
        fetch(URL_FACTS)
            .then(response => response.json())
            .then(data => setFact(data.fact))
    }, [])

    return (
        fact && (<h1>{fact}</h1>)
    )
}