import { CatImage } from "./components/CatImage"
import { useCatFact } from "./hooks/useCatFact"
import './App.css'

export function App () {

    const {fact, firstWord} = useCatFact()

    return (
        <main>
            <h1>App gatitos</h1>
            {fact && <p>{fact}</p>}
            <CatImage word={firstWord} />
        </main>
    )
}