import { useState } from "react"
import {TodoInput} from "./todoInput"
import {TodoItem}  from "./todoItems";
import {nanoid} from "nanoid";
 function Todo(){
    const [todoList , steTodoList] = useState([]) ;
    const getData =(todo)=>{

        const payload ={
            title :todo,
            status :false,
            id:nanoid(5),
        };
        steTodoList([...todoList, payload]);
    };

    const handleStatus =(id) =>{
        console.log("id",id);

        steTodoList([...todoList.map((el)=>(
            el.id=== id ? {...el, status: !el.status}
        :el)),])
        // find this id form todolist....
        // toggle it's status..........
        // got new array , set it agin.........
    }
       return <div> 
  <TodoInput getData ={getData}/>
{todoList.map((e)=>(
<div className="">
    <TodoItem handleStatus={handleStatus} todo={e}></TodoItem></div>
))}
    </div>

}

export {Todo}