import React, {useState} from 'react';

type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating() {

    const [value, setValue] = useState(0)

    const selectedStar = (id: number) => {
        setValue(id)
    }

    return (
        <div>
            {/*<span onClick={()=>{setValue(1)}}><Star selected={value > 0}/></span>
            <span onClick={()=>{setValue(2)}}><Star selected={value > 1}/></span>
            <span onClick={()=>{setValue(3)}}><Star selected={value > 2}/></span>
            <span onClick={()=>{setValue(4)}}><Star selected={value > 3}/></span>
            <span onClick={()=>{setValue(5)}}><Star selected={value > 4}/></span>*/}
            <Star id={1} selected={value > 0} callBack={selectedStar}/>
            <Star id={2} selected={value > 1} callBack={selectedStar}/>
            <Star id={3} selected={value > 2} callBack={selectedStar}/>
            <Star id={4} selected={value > 3} callBack={selectedStar}/>
            <Star id={5} selected={value > 4} callBack={selectedStar}/>

        </div>
    );
}

type StarPropsType = {
    id: number
    selected: boolean
    callBack: (id: number) => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={() => {props.callBack(props.id)}}>
            {props.selected ? <span ><b>Star </b></span> : <span>Star </span>
            }
        </span>
    )
}
