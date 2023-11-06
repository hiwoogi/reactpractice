import React, { useState } from "react";

export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
  const getStyle= (completed) => {
    return{
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" :"none"
      
    }
  }
  const handleClick = (id) => {
    //인수는 id를 받아온다.  필터함수를 통해서
    let newTodoData = todoData.filter((data) => data.id !== id);
    // this.setState({todoData: newTodoData})
    setTodoData(newTodoData);
  };



  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    // this.setState({todoData : newTodoData})
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div style={getStyle(data.completed)} key={data.id}>
          <input
            type="checkbox"
            onChange={() => handleCompleChange(data.id)}
            defaultChecked={false}
          />
          {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}
