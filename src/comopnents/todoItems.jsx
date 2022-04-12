 import "../App.css"
export const  TodoItem =({todo,handleStatus})=>{
    // <h1>Helloo</h1>
    return (
        // <h1>Helloo</h1>,
        <div className="box">
            
            {/* <div>id:{todo.id}</div> */}
            {todo.title}
            {/* -{todo.status ? "Done" :"NoeDone"} */}
            <button className={todo.status=== false ? "blue":"green"}
            onClick={()=>handleStatus(todo.id)} 
            ></button></div>
    )
   
}


