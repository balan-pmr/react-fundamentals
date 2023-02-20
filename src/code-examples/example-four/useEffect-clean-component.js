import { useEffect, useState } from "react"

//https://beta.reactjs.org/reference/react/useEffect#updating-state-based-on-previous-state-from-an-effect

export default function CleanComponent (props){

    const [count, setCount] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCount(c => c + 1); // ✅ Pass a state updater
        }, 1000);
        return () => clearInterval(intervalId);
      }, []); // ✅ Now count is not a dependency    


    // How not usign useEffect
    //https://beta.reactjs.org/learn/you-might-not-need-an-effect#updating-state-based-on-props-or-state
    
    const [name] = useState(props.name)
    const [lastName] = useState(props.lastName)

    // ✅ Good: calculated during rendering
    const fullName = name + ' ' + lastName;

    //When something can be calculated from the existing props or state, don’t put it in state. Instead, calculate it during rendering. 
    
    return (
        <div>
            Each second this count is incrementing... {count}
            <br/>
            {fullName}
        </div>
    )
}

/*
Recap

If you can calculate something during render, you don’t need an Effect.
To cache expensive calculations, add useMemo instead of useEffect.
To reset the state of an entire component tree, pass a different key to it.
To reset a particular bit of state in response to a prop change, set it during rendering.
Code that needs to run because a component was displayed should be in Effects, the rest should be in events.
If you need to update the state of several components, it’s better to do it during a single event.
Whenever you try to synchronize state variables in different components, consider lifting state up.
You can fetch data with Effects, but you need to implement cleanup to avoid race conditions.



*/