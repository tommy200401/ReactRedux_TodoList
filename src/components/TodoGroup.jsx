import TodoItem from "./TodoItem"
import { useSelector } from "react-redux"

const TodoGroup = () => {
    const todos = useSelector(state=>state.todoList)
    return (
        //Obtain info: add mapper for todo to map keys(from uuid) and todo info
        //make todo useful to TodoItem via props
        <div>
            {todos.map(todo=><TodoItem key={todo.id} todo={todo}></TodoItem>)}
        </div>
    )
}

export default TodoGroup;