import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import Select from './components/Select/Select';

export type ItemType = {
    title: string
    value: string
}

function App() {

    const [item, setItem] = useState<ItemType[]>([
            {title: 'Dima', value: '1'},
            {title: 'Misha', value: '2'},
            {title: 'Ira', value: '3'},
        ]
    )
    const [value, setValue] = useState('')

    const [ratingValue,setRatingValue] = useState<RatingValueType>(0)
    const [collapsed,setCollapsed] = useState(false)
    const [on,setOn] = useState(false)

    const onclickHandler = (value:any) => {
      alert(value)
    }


    const ChangeSelectValue = (value: string) => {
        setValue(value)
    }

    
    return (
        <div>
            <UncontrolledOnOff />
            <OnOff on={on} setOn={setOn}/>
            {/*<PageTitle title={"This is App component"} />
            <PageTitle title={"User"} />*/}
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion titleValue={"User"}
                       collapsed={collapsed}
                       item={item}
                       onChange={()=>setCollapsed(!collapsed)}
                       onClick={(value)=>onclickHandler(value)}

            />
            <Select item={item} onChange={ChangeSelectValue} value={value}/>
           {/* <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Music"}/>*/}

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
