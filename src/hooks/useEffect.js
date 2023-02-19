// Video Componenet
// https://beta.reactjs.org/learn/synchronizing-with-effects

import { useEffect, useRef, useState } from "react"


export default function VideoPlayer(){

    // htmlTag (https://www.w3schools.com/tags/av_met_play.asp)
    const videoRef = useRef(null);
    const videoSource = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
    const [isPlaying, setIsPlaying] = useState(false);

    /*
        Every time your component renders, React will update the screen 
        and then run the code inside useEffect. 
        
        In other words, useEffect “delays” a piece of code from running 
        until that render is reflected on the screen.

        Ref: https://beta.reactjs.org/learn/synchronizing-with-effects
    */

    useEffect(() => {
        // Code here will run after *every* render
        if(isPlaying){
            videoRef.current.play();
        }else{  
            videoRef.current.pause();
        }        
    });

    return <div>
        <button onClick={ () => {setIsPlaying(!isPlaying)} } >
            {isPlaying?'Pause':'Play'}
        </button>
        <video 
            src={videoSource}
            ref={videoRef}
            width="320" height="240"
            loop playsInline
        />
    </div>
}