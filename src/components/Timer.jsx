
import { useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [intervalID, setIntervalID] = useState(null);

    function handleStart() {
        if (intervalID !== null) return;
        const inter = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        setIntervalID(inter);
    }

    function handleStop() {
        clearInterval(intervalID);
        setIntervalID(null);
    }

    return (
        <div>
            <p>Seconds: {seconds}</p>

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default Timer;
