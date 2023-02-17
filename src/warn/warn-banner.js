
function WarnBanner (props){

    // This prevent render component until props.message has a value.
    if(!props.message){
        //return null;
        return <p> No props were passed into component</p>
    }

    return <div style={{background:'yellow'}} > Warning: {props.message}  </div>
}

export default WarnBanner;