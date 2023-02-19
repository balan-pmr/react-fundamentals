
// https://beta.reactjs.org/reference/react/useEffect

import { useEffect, useState } from "react"

/*
An Effect lets you keep your component synchronized with some external system (like a chat service). Here, external system means any piece of code that’s not controlled by React, such as:

A timer managed with setInterval() and clearInterval().
An event subscription using window.addEventListener() and window.removeEventListener().
A third-party animation library with an API like animation.start() and animation.reset().

If you’re not connecting to any external system, you probably don’t need an Effect.

*/

export default function ConnectAPI(){

    const [url, setUrl] = useState(null)
    const [results, setResults] = useState(null)
    const defaultUrl = 'https://api.escuelajs.co/api/v1/products';

    useEffect(
        ()=>{
            console.log('value of url is : '+url)
        },[url]
    )

    function loadData(){
        setResults(null)
        let validUrl;
        if(url ==='' || url === null ){
            setUrl(defaultUrl)
            validUrl = defaultUrl;
        }else{
            validUrl = url;
        }
        fetch(validUrl, {method: 'GET'}).then((response) => response.json()).then(
            data => {
                //console.log(data)
                if(data.statusCode !== undefined ){
                    throw new Error('Something went wrong');
                }else{
                    setResults(data.length)
                }
            }
        ).catch(
            e => {
                console.error('error at fetching e: '+e)
                setResults(null)
            }
        )
    }

    return (
        <div>
            <label htmlFor="url"> Enter URL to Excecute GET </label><br/>
            <input type="text" id="url" name="url" size="50" 
                value={url === null? defaultUrl: url}
                onChange={ (e)=> setUrl(e.target.value) }
            /><br/>
            <button onClick={loadData}>
                Request Data
            </button><br/>
            {
                results !== null? <p>Rows in data: {results}</p> : <p>No results for GET request: {url} </p>
            }
        </div>
    )
}