import {v4 as uuidv4} from 'uuid'

const initState = {todoList:[]}   //setup initial data
const todoReducer = (state=initState, action)=>{
    //add logic to manage database
    switch(action.type){
        case 'todo/add':
            // adding new entry in dict format: id, text, status
            const todo = {id:uuidv4(), text:action.payload, done: false}   
            return {todoList:[...state.todoList, todo]} //... = decompose item
        default:
            return state
    }
}

export default todoReducer;