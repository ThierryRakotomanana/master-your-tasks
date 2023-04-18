import React, { useState } from 'react';
import { className } from './className';
import { svg } from './svg';

export function List({value, deleteTask, editTask}){  
        const [content, setContent] = useState(value)    
        const [show, setShow] = useState(true)
        function changeEdit(newTitle){
                setShow(!show)
                newTitle && editTask(newTitle)
        }
        return (
                <li className="">
                     <span>
                        {show ? content : <input className={className.input} value={content}  onChange={ (e) => setContent(e.target.value)}/>}
                        <button className={className.texte} onClick={deleteTask}>Delete</button> 
                        <button className={className.texte} onClick={() => changeEdit( show ? false : content)}>{show ? "Edit" : "Save your edit"}</button>
                     </span> 
                </li>
        )
}