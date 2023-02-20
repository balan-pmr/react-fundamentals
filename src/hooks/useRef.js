import { useRef, useState } from "react"
/*
useRef is a React Hook that lets you reference a value that’s not needed for rendering.
*/
export default function ExampleUseRef (){

    const [count, setCount ] = useState(0);
    const [isStarting, setStarting ] = useState(false);
    const intervalRef = useRef(null);

    function onStart(){
        if(isStarting){ return; }
        setStarting(true)
        const interval = setInterval(() => {
            setCount( c=> c+1);
        }, 1000);
        intervalRef.current = interval;
    }

    function onPause(){
        if(!isStarting){ return; }
        setStarting(false)
        const interval = intervalRef.current;
        clearInterval(interval)
    }

    function onStop(){
        setCount(0); 
        setStarting(false) 
        if(intervalRef.current){
            console.log(intervalRef.current)
            clearInterval(intervalRef.current)
        }
    }


    return (
        <div>
            Chronometer: {count} seconds.
            <div>
                <button onClick={onStart} > Start </button>
                <button onClick={onPause} > Pause </button> 
                <button onClick={onStop} > Stop </button>        
            </div>
        </div>
    )
}