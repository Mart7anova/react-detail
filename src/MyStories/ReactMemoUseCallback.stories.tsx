import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'React.memo and useCallback'
}

export const UseCallBack = () => {
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['React', 'HTML', 'CSS', 'JS'])

    const memoized = useMemo(()=>{
        return () => {
            setBooks([...books, 'Angular ' + new Date().getTime()])
        }
    },[books])

    const memoized2 = useCallback(() => {
            setBooks([...books, 'Angular ' + new Date().getTime()])
    },[books])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>
        <Books books={books} addBook={memoized2}/>
    </>
}

/////////////////////////

type BooksSecretPropsType ={
    books: Array<string>
    addBook: ()=>void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    return <div>
        <button onClick={()=>props.addBook()}>add book</button>
        {props.books.map((b, i) =>
            <div key={i}>{b}</div>)
        }
    </div>
}
const Books = React.memo(BooksSecret)