
import {Link} from "react-router-dom";

export default function Navigation(){
    
    const pathsObject = [
        {"/home": "Home"},
        {"/calculator": "Calculator"},
        {"/warn": "Warn Banner"},
        {"/example-state": "Example State"},
        {"/clock": "Clock"},
        {"/jsx": "Componnet with JSX"},
        {"/react": "Componnet with Create.Component"}
    ]

    const pathsApp = pathsObject.map(object => {
        for (const [key, value] of Object.entries(object)) {
            return(
                <li>
                <Link to={key} >{value}</Link>
                </li>
            )
        }
    })

    return (
        <nav>
            <ul>
                {pathsApp}
            </ul>
        </nav>
    )
}
