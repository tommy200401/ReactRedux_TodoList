import TodoGroup from "./TodoGroup"
import TodoGenerator from "./TodoGenerator"
import '../style/TodoList.css'
import { useEffect } from "react"
import api from "../apis/api"

const TodoList = () => {
    useEffect(()=>{
        api.get('/todos')
        .then(response=>console.log(response))
    })
    return (
        <div className='todo'>
            <TodoGroup></TodoGroup>
            <TodoGenerator></TodoGenerator>
        </div>
    )
}

export default TodoList;