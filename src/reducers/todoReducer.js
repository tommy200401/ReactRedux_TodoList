const initState = {todoList:[]}   //setup initial data

// (old state, old action)
const todoReducer = (state=initState, action)=>{
    //add logic to manage database
    switch(action.type){
        case 'todo/add':
            // adding new entry in dict format: id, text, status
            return {todoList:[...state.todoList, action.payload]} //... = decompose item

        case 'todo/updateStatus':
            // set done case, else return same
            const newList = state.todoList.map(item=>{
                if (item.id === action.payload){
                    return {...item, done: !item.done}
                }
                return item
            })
            return {todoList: newList}

        case 'todo/delete':
            // return bool of checking id
            const filteredList = state.todoList.filter(item=>{
                return item.id !== action.payload
            })
            return {todoList: filteredList}

            // setup initial database from API
        case 'todo/init':
            return {todoList: action.payload}
        
        default:
            return state
    }
}


export default todoReducer;