import React, {useMemo, useState} from 'react';

export default {
    title: 'React.memo and useMemo'
}

const UsersSecrets = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) =>
            <div key={i}>{u}</div>)
        }
    </div>
}
const Users = React.memo(UsersSecrets)

export const HelpsForReactMemo = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Ira', 'Ivan', 'Pavel', 'Kiki'])

    const newArray = useMemo(()=>{
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    },[users])

    const addUser = () => {
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <div>{count}</div>
        <Users users={newArray}/>
    </>
}
