import TodoGroup from "./TodoGroup"
import TodoGenerator from "./TodoGenerator"
import '../style/TodoList.css'
import { useEffect } from "react"
import { getAllTodos } from "../apis/todos"
import { useDispatch } from "react-redux"

const TodoList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getAllTodos().then(response =>
            dispatch({ type: 'todo/init', payload: response.data }))
    })

    return (
        <div className='todo'>
            <TodoGenerator></TodoGenerator>
            <TodoGroup></TodoGroup>
        </div>
    )
}

export default TodoList;