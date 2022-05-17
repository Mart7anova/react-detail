import React, {useState} from "react";

type AccordionPropsType={
    titleValue: string
    //collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed,setCollapsed] = useState(true)

    const changeCollapsedValue = ()=> {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} callBack={changeCollapsedValue} />
            {!collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType={
    title: string
    callBack: ()=> void
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.callBack}>{props.title}</h3>
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