import React, {useState} from 'react';

export default {
    title: 'useState '
}

function  generationData() {
    console.log('generationData')
    return 3333
}

export const Example = () => {
    console.log('Example')
    //const initialValue = useMemo(generationData, [])

    const [counter, setCounter] = useState(generationData)

    const changer = (state: number) => {
        console.log('changer')
        return state+1
    }

    return <>
        {counter}
        <br/>
        <button onClick={() => setCounter(changer)}>+</button>
        <button onClick={() => setCounter( (state) => state+1)}>+</button>
    </>
}