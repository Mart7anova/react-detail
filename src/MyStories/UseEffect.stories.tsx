import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect'
}


export const Example = () => {
    console.log('Example')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])


    return <>
        {counter} {fake}
        <br/>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
    </>
}
export const SetTimeout = () => {
    console.log('SetTimeoutComponent')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const ID = setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)
        return(()=>{
            clearTimeout(ID)
        })
    }, [counter])

    return <>
        {counter} {fake}
        <br/>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
    </>
}
export const SetInterval = () => {
    console.log('SetIntervalComponent')
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const ID = setInterval(() => {
            console.log('tick ' + counter)
            setCounter((state)=> state+1)
        }, 1000)
        return (()=>{
            clearInterval(ID)
        })
    }, [])
    return <>
        {counter}
        <br/>
    </>
}