import React, { useState } from 'react';

export function List({value, deleteTask, editTask}){  
        const [content, setContent] = useState('')    
        const [show, setShow] = useState(true)
        function changeEdit(props = false){
                setShow(!show)
                props && editTask()
        }
        return (
                <li className="container">
                    {show && value}
                    {show ?
                     <span>
                        <button onClick={deleteTask}>Delete</button> 
                        <button onClick={changeEdit}>Edit</button>
                     </span> :
                    <div>
                        <input value={value}  onChange={ (e) => setContent(e.target.value)}/>
                        <button onClick={deleteTask}>Delete</button>
                         <button onClick={() =>changeEdit(content)}>save your edit</button>
                    </div>
                    }
                </li>
        )
}