import { useState } from "react";

function Clock(props) {

    const message = props.message ? props.message : 'This is a default message';
    const [ time, setTime ] = useState(new Date().toLocaleTimeString())

    setInterval( () => { setTime(new Date().toLocaleTimeString()) } , 1000);

    return (
        <div>
            I am a clock with a message {message}, and the time is <strong>{time}</strong>
        </div>
    );

}
export default Clock;