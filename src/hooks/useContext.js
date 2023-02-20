// Docs: https://beta.reactjs.org/reference/react/useContext

import { createContext, useContext, useState } from 'react';

const LenguageContext = createContext(null);

export default function ExampleUseContext (){

    const greetingMessageEN = 'I am the Parent Component';
    const greetingMessageES = 'Soy el componente base';    
    
    const [lenguage, setLenguage] = useState('en')
    const labelButton = lenguage === null || lenguage === 'en' ? 'ESPAÑOL':'ENGLISH';
    
    function changeLanguage(){
        if(lenguage === 'en'){
            setLenguage('es')
        }else{
            setLenguage('en')
        }
    }

    return (
        <div> 
            {   lenguage === 'en' ?
                greetingMessageEN : greetingMessageES
            }
            <br/> &#11015;
            <LenguageContext.Provider value={lenguage}>
                <Child1/>
            </LenguageContext.Provider>        

            <div>
                <button onClick={()=>changeLanguage()} >
                    {labelButton}
                </button>
            </div>

        </div>
    )
}


function Child1(){
    return (
        <div>
            I am the child1 and I am not going to change my message
            <br/> &#11015;
            <Child2/>
        </div>
    )
}


function Child2(){
    return (
        <div>
            I am the child2 and I am not going to change my message
            <br/> &#11015;
            <Child3/>
        </div>
    )
}



function Child3(){
    return (
        <div>
            I am the child3 and I am not going to change my message
            <br/> &#11015;
            <Child4/>
        </div>
    )
}


function Child4(){

    const lenguageContext = useContext(LenguageContext);
    const messageEN = ' I am the child4 and I can change my language by press the button';
    const messageES = 'Soy el hijo4 y puedo cambiar mi idioma presionando el boton.';    
    
    return (
        <div>
            {lenguageContext === null || lenguageContext === 'en' ?
                messageEN : messageES
            }
        </div>
    )
}