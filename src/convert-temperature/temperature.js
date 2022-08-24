
// this is an example of lifting state up taken from 
// https://reactjs.org/docs/lifting-state-up.html
// and implemented with Hooks insted of classes

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };


export default function Temperature (props){
    
    if(props.temperature === undefined || 
        props.scale === undefined ||
        props.onTemperatureChange === undefined 
        ){
            return null;
    }

    const temperatureScale =  scaleNames[props.scale]
    const temperature = props.temperature;

    function handleChange(e){
        props.onTemperatureChange(e.target.value)
    }
    
    return (
        <fieldset>
        <legend>Enter temperature in {temperatureScale}:</legend>
        <input value={temperature}
               onChange={handleChange} />
      </fieldset>
    )

}

