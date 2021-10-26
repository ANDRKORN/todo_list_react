import React from "react";
import ClassNames from "classnames";
const Task=(props)=>{
  
    return(<li className={ClassNames("list-item",{"list-item_done":props.done })} key={props.id}>
    <input
      type="checkbox"
      className="list-item__checkbox"
      defaultChecked={props.done}
      onChange={()=>props.handleTaskIsDone(props.id)}
    />
    <span className="list-item__text">{props.text}</span>
    <button className="list-item__delete-btn" 
              onClick={()=>props.deleteTask(props.id)}>
      +</button>
  </li>)
};


export default Task;