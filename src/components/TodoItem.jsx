import '../style/TodoItem.css'


const TodoItem = ({todo}) => {
    return (
        //show text and button (not used yet)
        <div className='box'>
            {todo.text}
            <span className='delete'>x</span>
        </div>
    )
}

export default TodoItem;    