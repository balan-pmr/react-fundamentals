

import { useState } from "react";

export default function RootComponent2 (){

    // If we want to pass a value from Root to C whe can wrapped 
    // from the root component as next.
    const [rootMessage] = useState("I am the root value")

    return (
        <div>RootComponent says: {rootMessage}
            <br/> &#11015;
            <ComponentA>
                <ComponentB>
                    <ComponentC rootMessage={rootMessage}/>
                </ComponentB>    
            </ComponentA> 
        </div>
        
    )

}

function ComponentA( props ){
    return(
        <div> Component A
            <br/> &#11015;
            {props.children}
        </div>
    )
}

function ComponentB(props){
    return(
        <div> Component B
            <br/> &#11015;
            {props.children}
        </div>
    )
}

function ComponentC(props){
    return(
        <div> Component C says: I got the message '{props.rootMessage}'</div>
    )
}
