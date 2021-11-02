import '../style/TodoItem.css'
import { useDispatch } from "react-redux";


const TodoItem = ({todo}) => {
    const text = (todo.done)?<del>{todo.text}</del>:todo.text;
    const dispatch = useDispatch()

    const updateStatus = () => {
        dispatch({type: 'todo/updateStatus', payload:todo.id})
    }

    const deleteTodo = () => {
        dispatch({type: 'todo/delete', payload:todo.id})
    }

    return (
        <div className='box'>
            <span onClick={updateStatus}>{text}</span>
            <button onClick={deleteTodo}>X</button>
        </div>
    )
}

export default TodoItem;