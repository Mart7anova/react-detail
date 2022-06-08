import React, {useRef, useState} from 'react';

export default {
    title: 'input',
    // component: Button,

}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(e) => {
        setValue(e.currentTarget.value)
    }}/> --{value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={onClickHandler}>Save</button>
        -actual value: {value}</>
}

export const ControlledInputWithFixedValue = () => <input value={'FixedValue'}/>

export const ControlledInput = () => {
    const [value, setValue] = useState('')

    return <input value={value} onChange={(e)=>setValue(e.currentTarget.value)}/>
}
export const ControlledCheckBox = () => {
    const [value, setValue] = useState(true)

    return <input type='checkbox' checked={value} onChange={(e)=>setValue(e.currentTarget.checked)}/>
}
export const ControlledSelect = () => {
   const [value, setValue] = useState<string>('2')

    return <select value={value} onChange={(e)=>{setValue(e.currentTarget.value)}}>
        <option>none</option>
        <option value={'1'}>Moscow</option>
        <option value={'2'}>Minsk</option>
    </select>
}
