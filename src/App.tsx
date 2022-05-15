import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function hello() {
    debugger
    alert('hello))))')
}

//hello();

function App() {
    
    return (
        <div>
            <OnOff />
            {/*<PageTitle title={"This is App component"} />
            <PageTitle title={"User"} />*/}
            Article 1
            <Rating value={4}/>
            <UncontrolledRating/>
            {/*<Accordion titleValue={"Menu"} collapsed={true} />
            <Accordion titleValue={"Music"} collapsed={false} />*/}
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
