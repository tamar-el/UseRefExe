import { useRef, useState } from "react";

const ClearInput = () => {
    const [input, setInput]=useState("");


    const inputRef=useRef("");
    function clearInput(){
        inputRef.current.value = "";
    }
    return ( 
        <>
        <input type="text" value={input}   onChange={(e) => setInput(e.target.value)} />
        <button onClick={()=>{setInput("")}}>Clear Input</button>

        <input type="text" refValue={inputRef} />

        </>
     );
}
 
export default ClearInput;