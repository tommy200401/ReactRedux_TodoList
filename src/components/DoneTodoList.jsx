import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const DoneTodoList = () => {
    const doneList = useSelector(state => state.todoList.filter(item => item.done))

    return (
        <div>
            <h2>Done Todo Page</h2>
            {doneList.map(todo => (<TodoItem key={todo.id} todo={todo}></TodoItem>))}
        </div>
    )
}

export default DoneTodoList