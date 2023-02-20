import { useEffect, useState, useMemo } from "react"


export default function ExampleUseMemo(){

    const [name, setName] = useState('')
    const [lastName, setLastname] = useState('')
    const [darkMode, setDarkMode] = useState(false)
    
    
    function handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    const person = useMemo( ()=> {
        return { name, lastName }
    }, [name, lastName])

    useEffect(
        ()=>{
            console.log(person)
        }, [person]
    )

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ backgroundColor: darkMode? "grey" :"white", padding:"30px" }} >
                <label>Name: </label>
                <input type="text" value={name} onChange={ e=> setName(e.target.value) } />
                <label>LastName: </label>
                <input type="text" value={lastName} onChange={ e=> setLastname(e.target.value) } />
                <br/>
                <label>Dark Mode: </label>
                <input type="checkbox" onChange={ e=> setDarkMode(e.target.checked)}/>
                <br/>
                <label>Person : {person.name} {person.lastName} </label>
            </form>
        </div>
    )

}