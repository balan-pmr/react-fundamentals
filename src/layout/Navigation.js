
import {Link} from "react-router-dom";

export default function Navigation(){
    
    const pathsObject = [
        {"/calculator": "Calculator"},
        {"/warn": "Warn Banner"},
        {"/example-useState": "Example useState() hook"},
        {"/example-useEffect": "Example useEffect() hook"},
        {"/example-useContext": "Example useContext() hook"},
        {"/example-useRef": "Example useRef() hook"},
        {"/example-useMemo": "Example useMemo() hook"},
        {"/life": "Example useEffect() as Life Cycle Events"},        
        {"/clock": "Clock"},
        {"/jsx": "Componnet with JSX"},
        {"/react": "Componnet with Create.Component"},
        {"/example-1": "Code Example 1 : Passing props to child"},
        {"/example-2": "Code Example 2 : Passing props to a wrapped child"},
        {"/example-3": "Code Example 3 : Connect with an API "}, 
        {"/example-4": "Code Example 4 : Examples using useEffect() hook "}                
    ]

    let index = 0;
    const pathsApp = pathsObject.map(object => {
        let htmlElement;
        for (const [key, value] of Object.entries(object)) {           
                htmlElement= <li key={++index}  > <Link to={key}>{value}</Link> </li>
        }
        return htmlElement;
    })

    //console.log(pathsApp)

    return (
        <nav>
            <ul>
                {pathsApp}
            </ul>
        </nav>
    )
}
