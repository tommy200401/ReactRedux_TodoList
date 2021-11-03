import '../style/TodoItem.css'
import { useDispatch } from "react-redux";
import classNames from 'classnames';
import { updateTodo } from '../apis/todos';
import { Button } from "antd";
import {CloseOutlined, EditOutlined} from '@ant-design/icons'
import EditTodoBox from './EditTodoBox';

const TodoItem = ({todo}) => {
    let textClass = classNames({done: todo.done, notDone: false})
    
    const dispatch = useDispatch()

    const updateStatus = () => {
        updateTodo({ id: todo.id, done: !todo.done })     // unchange original text, pass id and different status
        .then(response=>(dispatch({type: 'todo/updateStatus', payload:response.data})))
    }

    const deleteTodo = (id) => {
        // api.delete(`/todos/${id}`)
        dispatch({type: 'todo/delete', payload:todo.id})
    }

    return (
        <div className='box'>
            <span className={textClass} onClick={updateStatus}>{todo.text}</span>
            <Button type="text" icon={<CloseOutlined style={{color: 'grey'}}/>} className="delete" onClick={deleteTodo}></Button>
            <Button type="text" icon={<EditOutlined/>} className="edit" onClick={EditTodoBox}></Button>
        </div>
    )
}

export default TodoItem;