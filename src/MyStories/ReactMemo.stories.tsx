import React, {useState} from 'react';

export default {
    title: 'React.memo '
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecrets = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) =>
            <div key={i}>{u}</div>)
        }
    </div>
}
const Users = React.memo(UsersSecrets)

export const Example1 = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Ira', 'Ivan', 'Pavel'])

    const addUser =()=>{
        setUsers([...users, 'Sveta '+ new Date().getTime()])
    }

    return <>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter count={count}/>
        <Users users={users}/>
    </>
}