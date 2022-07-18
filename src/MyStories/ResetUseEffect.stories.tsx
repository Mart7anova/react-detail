import React, {useEffect, useState} from 'react';

export default {
    title: 'ResetUseEffect'
}

export const ResetEffect = () => {
    const [counter, setCounter] = useState(1)
    console.log('SetIntervalComponent', counter)

    useEffect(() => {
            console.log('useEffect', counter)
        return(()=>{
            console.log('Reset Effect', counter)
        })
    }, [counter])

    return <div>
        counter: {counter}
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <br/>
    </div>
}
export const KeyTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('SetIntervalComponent', text)

    useEffect(() => {
        const Handler = (e: KeyboardEvent) =>{
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', Handler)

        return(()=>{
            window.removeEventListener('keypress', Handler)
        })
    }, [text])

    return <div>
        counter: {text}
        <br/>
    </div>
}
export const SetTimeoutExample = () => {
    const [text, setText] = useState('')
    console.log('SetIntervalComponent', text)

    useEffect(() => {
        const ID = setTimeout(()=>{
            setText('3 seconds')
        },3000)

        return(()=>{
           clearTimeout(ID)
        })
    }, [text])

    return <div>
        counter: {text}
        <br/>
    </div>
}