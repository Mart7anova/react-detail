import React, {ChangeEvent} from 'react';
import {ItemType} from '../../App';

export type SelectPropsType = {
    value: string
    onChange: (value: string) => void
    item: ItemType[]
}

const Select = (props: SelectPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.currentTarget.value)
    }

    return (
            <select value={props.value} onChange={onChangeHandler}>
                <option>Users</option>
                {props.item.map((i, index) =>
                    <option key={index} value={i.value}>{i.title}</option>
                )}
            </select>
    );
};

export default Select;