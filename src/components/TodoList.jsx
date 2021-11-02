import TodoGroup from "./TodoGroup"
import TodoGenerator from "./TodoGenerator"
import '../style/TodoList.css'

const TodoList = () => {
    return (
        <div className='todo'>
            <TodoGroup></TodoGroup>
            <TodoGenerator></TodoGenerator>
        </div>
    )
}

export default TodoList;