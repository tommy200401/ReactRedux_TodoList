import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoGenerator = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    return (
        //Update on action: add text on click
    <div>
        <input onChange={event=>setText(event.target.value)}defaultValue={text}></input>
        <button onClick={()=>dispatch({type:'todo/add', payload:text})}>ADD</button>
    </div>)
}

export default TodoGenerator;