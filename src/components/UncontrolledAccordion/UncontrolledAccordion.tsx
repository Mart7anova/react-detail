import React, {useReducer, useState} from 'react';


type ActionType={
    type: string
}

const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

const reducer = (state: boolean, action: ActionType) =>{
    switch (action.type){
        case TOGGLE_COLLAPSED:
            return !state
        default:
            throw new Error('Bad action type!!!')
    }
}

type AccordionPropsType={
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    //const [collapsed,setCollapsed] = useState(true)
    const [collapsed,dispatch] = useReducer(reducer, true)

    const changeCollapsedValue = ()=> {
        //setCollapsed(!collapsed)
        dispatch({type: TOGGLE_COLLAPSED} )
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