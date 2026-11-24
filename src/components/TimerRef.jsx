
import { useState,useRef } from "react";

const TimerRef = () => {
    const [seconds, setSeconds] = useState(0);
    const intervalID = useRef(null);

    function handleStart() {
        if (intervalID.current !== null) return;
        const inter = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        intervalID.current=inter;
    }

    function handleStop() {
        clearInterval(intervalID.current);
        intervalID.current=null;
    }

    return (
        <div>
            <p>Seconds: {seconds}</p>

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default TimerRef;
