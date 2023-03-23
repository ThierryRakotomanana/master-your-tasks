import React from 'react';

export function List({message, handleClick}){
    
        return (
                <li className="container" key={message}>
                    {message}
                    <button onClick={handleClick}>Delete</button>
                </li>
        )
}