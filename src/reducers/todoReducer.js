const initState = {todoList:[]}   //setup initial data

// (old state, old action)
const todoReducer = (state=initState, action)=>{
    //add logic to manage database
    switch(action.type){
        case 'todo/init':
            return {todoList: action.payload}

        case 'todo/add':
            // adding new entry in dict format: id, text, status
            return {todoList:[...state.todoList, action.payload]} 
            // '...': spread opeator, means remaining items of whole array

        case 'todo/updateStatus':
            // set done case, else return same
            const newList = state.todoList.map(item=>{     //setup new list 
                if (item.id === action.payload.id){       //if item match the one passed by payload
                    return action.payload;                //return payload (updated status)
                }
                return item                               //otherwise get original status
            })
            return {todoList: newList}

        case 'todo/delete':
            // return bool of checking id
            const filteredList = state.todoList.filter(item=>{
                return item.id !== action.payload   // if different state (T/F)
            })
            return {todoList: filteredList}

            // setup initial database from API
        
        default:
            return state
    }
}


export default todoReducer;