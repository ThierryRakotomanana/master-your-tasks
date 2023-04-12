import React, { useState } from 'react';

export function List({value, deleteTask, editTask}){  
        const [content, setContent] = useState(value)    
        const [show, setShow] = useState(true)
        function changeEdit(newTitle){
                setShow(!show)
                newTitle && editTask(newTitle)
        }
        return (
                <li className="container">
                    {show ? 
                     <span>
                        {content}
                        <button onClick={deleteTask}>Delete</button> 
                        <button onClick={() => changeEdit(false)}>Edit</button>
                     </span> :
                    <span>
                        <input value={content}  onChange={ (e) => setContent(e.target.value)}/>
                        <button onClick={deleteTask}>Delete</button>
                         <button onClick={() =>changeEdit(content)}>save your edit</button>
                    </span>
                    }
                </li>
        )
}