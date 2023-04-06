import React from "react"

export function List({value, onClick, id}){
    
        return (
                <li className="container">
                    {value}
                    <button onClick={onClick}>Delete</button>
                </li>
        )
}