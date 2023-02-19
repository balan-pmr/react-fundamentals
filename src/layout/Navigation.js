
import {Link} from "react-router-dom";

export default function Navigation(){
    
    const pathsObject = [
        {"/calculator": "Calculator"},
        {"/warn": "Warn Banner"},
        {"/example-state": "Example useState() hook"},
        {"/effect": "Example useEffect() hook"},
        {"/life": "Example useEffect() as Life Cycle Events"},        
        {"/clock": "Clock"},
        {"/jsx": "Componnet with JSX"},
        {"/react": "Componnet with Create.Component"},
        {"/example-1": "Code Example 1 : Passing props to child"},
        {"/2": "Code Example 2 : Passing props to a wrapped child"},
        {"/3": "Code Example 3 : Connect with an API "}                
    ]

    let index = 0;
    const pathsApp = pathsObject.map(object => {
        let htmlElement;
        for (const [key, value] of Object.entries(object)) {           
                htmlElement= <li key={++index}  > <Link to={key}>{value}</Link> </li>
        }
        return htmlElement;
    })

    console.log(pathsApp)

    return (
        <nav>
            <ul>
                {pathsApp}
            </ul>
        </nav>
    )
}
