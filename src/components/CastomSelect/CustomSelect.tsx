import React, {KeyboardEvent, useEffect, useState} from 'react';
import {ItemType} from '../../App';
import s from './CustomSelect.module.css';

export type CustomSelectPropsType = {
    value?: any
    onChange: (value: any) => void
    item: ItemType[]
}

export const CustomSelect = (props: CustomSelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value)
    useEffect(()=>{
        setHoveredItemValue(props.value)
    },[props.value])

    const selectedItem = props.item.find(i => i.value === props.value)
    const hoveredItem = props.item.find(i => i.value === hoveredItemValue)

    const onChangeItem = (value: any) => {
        props.onChange(value)

    }
    const OnKeyUp = (e: KeyboardEvent<HTMLDivElement>) =>{
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
            for (let i=0; i< props.item.length; i++){
                if(props.item[i].value === hoveredItemValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.item[i + 1]
                        : props.item[i - 1]
                    if (pretendentElement){
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem){
                props.onChange(props.item[0].value)
            }
        }
        if (e.key === 'Enter') {
            setActive(!active)
        }
    }

    return (
        <div className={s.select}  onKeyUp={OnKeyUp} tabIndex={0} onClick={() => setActive(!active)}>
            <span>{selectedItem && selectedItem.title}</span>
            {
                active
                    ? <div className={s.item}>
                        {props.item.map(i =>
                            <div key={i.value}
                                 onClick={()=>onChangeItem(i.value)}
                                 onMouseEnter={()=>setHoveredItemValue(i.value)}
                                 className={hoveredItem === i ? s.selected : ''}
                            >
                                {i.title}
                            </div>)}
                    </div>
                    : ''
            }

        </div>
    );
};
