import React from "react";

function Task(props) {
  const handleDelete = () => {
    props.onDelete(props.text,props.category);
  }
  
  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;