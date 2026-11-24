const TextBox = (props) => {
    return ( 
        <div>
            <input type="text" ref={props.refValue}/>
        </div>
     );
}
 
export default TextBox;