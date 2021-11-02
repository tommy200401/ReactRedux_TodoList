import '../style/TodoItem.css'
import { useDispatch } from "react-redux";


const TodoItem = ({todo}) => {
    const text = (todo.done)?<del>{todo.text}</del>:todo.text;
    const dispatch = useDispatch()

    const updateStatus = () => {
        dispatch({type: 'updateStatus', payload:todo.id})
    }

    return (
        <div className='box'>
            <span onClick={updateStatus}>{text}</span>
        </div>
    )
}

export default TodoItem;    