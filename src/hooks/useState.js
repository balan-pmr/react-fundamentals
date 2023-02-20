
import { useState } from "react";

export default function ExampleState(props) {

    const [counter, setCounter] = useState(0);
    const increment = () => { setCounter(counter+1) }

    return (
        <div>
            Counter is {counter}, you can increment by clicking this button - 
            <button  type="button" onClick={increment}>
            Increment Counter
            </button>
        </div>
    );

}