export function List({value, onClick, id}){
    
        return (
                <li className="container" key={id}>
                    {value}
                    <button onClick={onClick}>Delete</button>
                    {id}
                </li>
        )
}