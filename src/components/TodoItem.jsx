import '../style/TodoItem.css'
import { useDispatch } from "react-redux";
import classNames from 'classnames';
import { deleteTodo, updateTodo } from '../apis/todos';
import { Button } from "antd";
import { CloseOutlined } from '@ant-design/icons'
import EditTodoBox from './EditTodoBox';

const TodoItem = ({ todo }) => {
    let textClass = classNames({ done: todo.done, notDone: false })

    const dispatch = useDispatch()

    const updateStatus = () => {                          // anonymous
        updateTodo({ id: todo.id, done: !todo.done })     // unchange original text, pass id and different status
            .then(response => (dispatch({ type: 'todo/updateStatus', payload: response.data })))
    }

    const deleteTodoItem = () => {
        deleteTodo(todo.id)
            .then(() => (dispatch({ type: 'todo/delete', payload: todo.id })));
    }

    // pass down todo to editbox!!!
    return (
        <div className='box'>
            <span className={textClass} onClick={updateStatus}>{todo.text}</span>
            <Button type="text" icon={<CloseOutlined style={{ color: 'grey' }} />} className="delete" onClick={deleteTodoItem}></Button>
            <EditTodoBox key={todo.id} todo={todo}></EditTodoBox>
        </div>
    )
}

export default TodoItem;