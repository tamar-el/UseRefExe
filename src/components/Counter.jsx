import { useRef } from "react";
import { useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);
    const lastCounter = useRef(number);


    return (
        <>
            <h1>Counter</h1>
            <h3>
                Current: {number} (Previous: {lastCounter.current})
            </h3>
            <button onClick={() => { lastCounter.current = number; setNumber(prev => prev + 1) }}>+1</button>
            <button onClick={() => { lastCounter.current = number; setNumber(prev => prev - 1) }}>-1</button>
        </>
    );
}

export default Counter;