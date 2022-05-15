import React, {useState} from "react";

type AccordionPropsType={
    titleValue: string
    //collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed,setCollapsed] = useState(true)

    const onClickHandler = ()=> {
        (collapsed) ? setCollapsed(false) : setCollapsed(true)
    }

    return (
        <div onClick={onClickHandler}>
            <AccordionTitle title={props.titleValue} />
            {!collapsed&&<AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType={
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>{props.title}</h3>
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

export default UncontrolledAccordion;