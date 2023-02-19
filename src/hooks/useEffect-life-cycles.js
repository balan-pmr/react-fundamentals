import { useEffect, useState } from "react"

export default function LifeCycles (){

    const [counter, setCounter] = useState(0);


    //similar to componentDidUpdate()
    /*useEffect(
        ()=>{
            console.log('Every render, I am excecuting...')
        }
    )*/

    // similar to componentDidMount()
    useEffect(
        ()=>{
            console.log('called just once...')
        }
        ,[]
    )

    // similar to componnetWillUnmount()
    useEffect(
        ()=>{
            console.log('called BEFORE unmounting ...')
            return(
                ()=>{
                    console.log('called AFTER unmounting ...')
                }
            )            
        },[]
    )

    //similar to componentDidUpdate()
    useEffect(
        ()=>{
            console.log('This is called once counter is changing -> '+counter)       
        },[counter]
    )    

    return(
        <div>
            LifeCycles Example with useEffect
            <div>
                Press this button to change state and trigger a render {counter}
                <button onClick={()=>setCounter(counter+1)} > Counter++ </button>
            </div>
        </div>
    )
}