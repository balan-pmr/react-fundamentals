
// this is an example of lifting state up taken from 
// https://reactjs.org/docs/lifting-state-up.html
// and implemented with Hooks insted of classes

import {useState} from "react";
import Temperature from "./temperature";


export default function Calculator (){

    const [celcius, setCelcius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    function onFarenheitChange(temperature){
        setCelcius(temperature)
        setFahrenheit(convert(temperature, 'f'));
    }

    function onCelciusChange(temperature){
        setFahrenheit(temperature)
        setCelcius(convert(temperature, 'c'));
    }

    return (
        <div>
        <Temperature scale={'c'} temperature={celcius} onTemperatureChange={onFarenheitChange} />
        <Temperature scale={'f'} temperature={fahrenheit} onTemperatureChange={onCelciusChange} />
        </div>
    );


}


function convert(temperature, scale){
    if(temperature === '' || parseFloat(temperature) === isNaN ){ return '';}
    return scale === 'c' ? toCelsius(temperature): toFahrenheit(temperature); 
}

function toCelsius(fahrenheit) {
return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
return (celsius * 9 / 5) + 32;
}