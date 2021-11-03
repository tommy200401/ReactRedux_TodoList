import { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../apis/api";

const TodoGenerator = () => {
    // useState, can be used inside
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const addTodo = () => {
        api.post('/todos', {text, done:false})
        .then(response=>dispatch({type:'todo/add', payload: response.data}))
    }

    return (
        //Update on action: add text on click
    <div>
        <input onChange={event=>setText(event.target.value)}defaultValue={text}></input>
        <button onClick={addTodo}>ADD</button>
    </div>)
}

export default TodoGenerator;