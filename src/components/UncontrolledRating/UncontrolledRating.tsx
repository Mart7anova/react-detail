import React, {useState} from 'react';

type RatingValueType= 0 | 1 | 2 | 3 | 4 | 5

type RatingType = {
    value: RatingValueType
}

export function UncontrolledRating() {

    const [value, setValue] = useState<RatingValueType>(0)

    return (
        <div>
            {/*<span onClick={()=>{setValue(1)}}><Star selected={value > 0}/></span>
            <span onClick={()=>{setValue(2)}}><Star selected={value > 1}/></span>
            <span onClick={()=>{setValue(3)}}><Star selected={value > 2}/></span>
            <span onClick={()=>{setValue(4)}}><Star selected={value > 3}/></span>
            <span onClick={()=>{setValue(5)}}><Star selected={value > 4}/></span>*/}
            <Star selected={value > 0} callBack={()=>setValue(1)}/>
            <Star selected={value > 1} callBack={()=>setValue(2)}/>
            <Star selected={value > 2} callBack={()=>setValue(3)}/>
            <Star selected={value > 3} callBack={()=>setValue(4)}/>
            <Star selected={value > 4} callBack={()=>setValue(5)}/>

        </div>
    );
}


type StarPropsType = {
    selected: boolean
    callBack: () => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={props.callBack}>
            {props.selected ? <b>Star </b> : 'Star '
            }
        </span>
    )
}
