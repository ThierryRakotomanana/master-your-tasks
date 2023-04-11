import React, { useState } from 'react';

export function List({value, deleteTask, editTask}){  
        const [content, setContent] = useState('')    
        const [show, setShow] = useState('')
        function changeEdit(){
                setShow(!show)
        }
        return (
                <li className="container">
                    {show && value}
                    <button onClick={deleteTask}>Delete</button>
                    {show ? <button onClick={changeEdit}>Edit</button> :
                    <div>
                        <input value={content}  onChange={ (e) => setContent(e.target.value)}/> <button onClick={editTask}>save your edit</button>
                    </div>
                    }
                    calcul
                    
                </li>
        )
}