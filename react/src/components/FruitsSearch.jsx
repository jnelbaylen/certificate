import { useState } from "react"

export function FruitsSearch() {

    const [ query, setQuery ] = useState('')
    const [ results, setResults ] = useState([])

    return(
        <div id="search-container">
            <form>
                <label htmlFor="search-input">Search for fruits:</label>
                <input id="search-input" type="search"  />
            </form>
        </div>
    )
}