import { ADD, DELETE } from "./types"


const initialState ={
    todos :[{id:0,task:'Eat', done:true},{id:1,task:'Sleep', done:false},{id:2,task:'repeat', done:false}],
   
   }
   
   const Reducer =(state=initialState,action )=>{
   
       switch (action.type) {
           case ADD : return{...state, todos:[...state.todos,action.payload]}
        //    case DELETE : return{...state,todos:[...state.todos.filter(el=> id!==el.id)]}   
           
       
           default:
               return state
          
       }
   }

   export default Reducer