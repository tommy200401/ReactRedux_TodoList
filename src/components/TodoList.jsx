import TodoGroup from "./TodoGroup"
import TodoGenerator from "./TodoGenerator"
import '../style/TodoList.css'
import { useEffect } from "react"
import { getAllTodos } from "../apis/todos"
import { useDispatch } from "react-redux"

const TodoList = () => {
    const dispatch = useDispatch();

    // initial get all data from database(api) and put to store
    useEffect(() => {
        getAllTodos().then(response =>
            dispatch({ type: 'todo/init', payload: response.data }))
    })

    return (
        <div className='topbar'>
            <TodoGenerator></TodoGenerator>
            <TodoGroup></TodoGroup>
        </div>
    )
}

export default TodoList;