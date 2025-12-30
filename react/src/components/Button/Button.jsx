import { useCallback, useState } from "react";

export function Button(){

    const [ count, setCount ] = useState(0);

    const onHandleClick = useCallback(() => {
        alert("Hello, there")
    }, []) 
     
    const onHandleClickCount = useCallback(() => {
        setCount(count => count + 1)
    }, [ setCount ])
    
    return (
        <div>
            <button 
                className="btn-one" 
                onClick={ onHandleClick }
            >
                I'm a button
            </button>
            <button 
                className="btn-two" 
                onClick={ onHandleClickCount }
            >
                Clicked { count } times
            </button>
        </div>
    )
}


