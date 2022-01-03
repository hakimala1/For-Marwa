import React from 'react'

function Task({el}) {
    return (
        <div>
            <h1>{el.task}</h1>
            <h2>{el.done? 'done':'Not'}</h2>

        </div>
    )
}

export default Task
