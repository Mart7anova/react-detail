import React from 'react';
import { ItemType } from '../../App';

export type AccordionPropsType = {
    titleValue: string
    /**
     * submenu display mode
     */
    collapsed: boolean
    /**
     * when clicked, the submenu collapses and unfolds
     */
    onChange: () => void
    item: ItemType[]
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody item={props.item} onClick={props.onClick}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    );
}

export type AccordionBodyPropsType = {
    item: ItemType[]
    onClick: (value: any) => void
}


function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <div>
            {props.item.map((i, index) =>
                <li key={index} onClick={() => props.onClick(i.value)}>
                    {i.title}
                </li>)}
        </div>
    );
}

export default Accordion;