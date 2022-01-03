import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Ajouter({ajout}) {
    const todos = useSelector(state => state.todos)
    const [task,setText]=useState(todos.task)
    const done=false
 
    const dispatch = useDispatch()
    return (
        <div>
     <input onChange={(e)=>setText(e.target.value)} value={task}></input>    
      <button onClick={()=>dispatch(ajout({task,done}))}>ADD</button>
            
        </div>
    )
}

export default Ajouter
