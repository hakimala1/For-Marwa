import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ajouter from './Ajouter'
import{add, Delete}from './redux/action'
import Task from './Task'


function Todoliste() {
  const state = useSelector((state)=>({...state.todos}))
  const dispatch = useDispatch()
  const[text,setText]= useState('')
  const Ajout=(newtask)=>{
    dispatch(add(newtask))
}

    return (
        <div>
      <h1>My todo liste</h1> 
      <Ajouter ajout={Ajout}></Ajouter> 
      {/* <input onChange={(e)=>setText(e.target.value)}></input>    
      <button onClick={()=>dispatch(add({text}))}>ADD</button> */}
       {/* <div> <li> 
      <button>Done</button>
      <button onClick={()=>dispatch(Delete({}))}>delete </button>
      </li>
      </div> */}
       {state.todos &&
                    state.todos.map(el=><div className='cadre'><h1>{el.task}</h1><br/> <button>{el.done ? 'Done' : 'Not'}</button>
                      <button onClick={()=>dispatch(Delete({}))}>delete </button></div>)}


        </div>
    )
}

export default Todoliste
