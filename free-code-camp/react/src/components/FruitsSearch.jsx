import { useCallback, useState } from "react"

export function FruitsSearch() {

    const [ query, setQuery ] = useState('')
    const [ results, setResults ] = useState([])

    const onHandleChange = useCallback((event) => {
        setQuery(event.currentTarget.value)
    })

    const onHandleSubmit = useCallback((event) => {
        event.preventDefault()
    })

    return(
        <div id="search-container">
            <form onSubmit={ onHandleSubmit }>
                <label htmlFor="search-input">Search for fruits:</label>
                <input 
                    id="search-input" 
                    type="search"
                    value={ query }  
                    onChange={ onHandleChange }
                />
            </form>

            <div id="results">
                { results.length > 0 ? ( results.map(item => ( 
                    <p key={ item } className="results-item">{ item }</p> 
                    )) 
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    )
}