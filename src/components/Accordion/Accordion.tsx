import React from "react";

export type AccordionPropsType={
    titleValue: string
    /**
     * submenu display mode
     */
    collapsed:boolean
    /**
     * when clicked, the submenu collapses and unfolds
     */
    onClick: ()=>void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            {!props.collapsed&&<AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType={
    title: string
    onClick: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
        return (
            <h3 onClick={props.onClick}>{props.title}</h3>
        );
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    );
}

export default Accordion;