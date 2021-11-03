import TodoGroup from "./TodoGroup"
import TodoGenerator from "./TodoGenerator"
import '../style/TodoList.css'
import { useEffect } from "react"
import api from "../apis/api"
import { useDispatch } from "react-redux"

const TodoList = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        api.get('/todos')
        .then(response=>dispatch({type:'todo/init', payload: response.data}))
    })

    return (
        <div className='todo'>
            <TodoGroup></TodoGroup>
            <TodoGenerator></TodoGenerator>
        </div>
    )
}

export default TodoList;