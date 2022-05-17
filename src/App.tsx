import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";

function hello() {
    debugger
    alert('hello))))')
}

//hello();

function App() {

    const [ratingValue,setRatingValue] = useState<RatingValueType>(0)
    const [collapsed,setCollapsed] = useState(true)
    const [on,setOn] = useState(false)
    
    return (
        <div>
            <UncontrolledOnOff />
            <OnOff on={on} setOn={setOn}/>
            {/*<PageTitle title={"This is App component"} />
            <PageTitle title={"User"} />*/}
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion titleValue={"Menu"} collapsed={collapsed} onClick={()=>setCollapsed(!collapsed)} />
            <Accordion titleValue={"Music"} collapsed={collapsed} onClick={()=>setCollapsed(!collapsed)} />
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Music"}/>

        </div>
    );
}

type PageTitlePropsType={
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1> {props.title} </h1>
}


export default App;
