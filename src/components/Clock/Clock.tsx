import React, {useEffect, useState} from 'react';
import {AnalogClock} from './AnalogClock';

export type ClockPropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timeId = setInterval(() => {
            console.log('a')
            setDate(new Date())
        }, 1000)
        return () => {
            console.log('b')
            clearInterval(timeId)
        }
    }, [])

    return (
        <div>
            {props.mode === 'digital'
                ? date.toLocaleTimeString()
                : <AnalogClock date={date}/>
            }
        </div>
    );
};
