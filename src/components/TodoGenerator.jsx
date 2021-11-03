import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../apis/todos";
import { Button } from "antd";
import 'antd/dist/antd.css';

const TodoGenerator = () => {
    // useState, can be used inside
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const addTodo = () => {
        createTodo({ text, done: false })                                           // set parameter: text = input text, done default false
            .then(response => dispatch({ type: 'todo/add', payload: response.data }))     // response: include other stuff, need to get [data] out
    }

    return (
        //Update on action: add text on click with 'setter'
        <div>
            <input onChange={event => setText(event.target.value)} defaultValue={text}></input>
            <Button type="primary" onClick={addTodo}>ADD</Button>
        </div>)
}

export default TodoGenerator;