import '../style/TodoItem.css'
import { useDispatch } from "react-redux";
import classNames from 'classnames';


const TodoItem = ({todo}) => {
    // const text = (todo.done)?<del>{todo.text}</del>:todo.text;

    let textClass = classNames({done: todo.done, notDone: false})
    
    const dispatch = useDispatch()

    const updateStatus = () => {
        dispatch({type: 'todo/updateStatus', payload:todo.id})
    }

    const deleteTodo = () => {
        dispatch({type: 'todo/delete', payload:todo.id})
    }

    return (
        <div className='box'>
            <span className={textClass} onClick={updateStatus}>{todo.text}</span>
            <button className="delete" onClick={deleteTodo}>X</button>
        </div>
    )
}

export default TodoItem;