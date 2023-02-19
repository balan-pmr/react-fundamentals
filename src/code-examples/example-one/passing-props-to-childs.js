

import { useState } from "react";

export default function RootComponent (){

    // If we want to pass a value from Root to C whe can wrapped 
    const [rootValue] = useState("I am the root value")

    return (
        <div>RootComponent says: {rootValue}
            <br/> &#11015;
            <ComponentA rootMessage={rootValue} /> 
        </div>
        
    )

}

function ComponentA( props ){
    return(
        <div> Component A
            <br/> &#11015;
            <ComponentB rootMessage={props.rootMessage} /> 
        </div>
    )
}

function ComponentB(props){
    return(
        <div> Component B
            <br/> &#11015;
            <ComponentC rootMessage={props.rootMessage}/> 
        </div>
    )
}

function ComponentC(props){
    return(
        <div> Component C says: I got the message '{props.rootMessage}'</div>
    )
}
