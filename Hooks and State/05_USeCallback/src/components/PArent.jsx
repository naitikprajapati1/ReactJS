/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react"
import Child from "./Child";

const PArent = () => {
    console.log('Parent Component');
    const [count, setCount] = useState(0)
    const [countt, setCountt] = useState(0)
    const Abc = useCallback(() => {

    }, [countt]);
    return (
        <div>
            <Child Abc={Abc} />
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Add </button>
            <br />
            <br />
            <h1>{countt}</h1>
            <button onClick={() => setCountt(countt + 1)}>Count </button>

        </div>
    )
}

export default PArent