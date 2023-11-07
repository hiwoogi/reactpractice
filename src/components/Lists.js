import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function List({ todoData, setTodoData }) {
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

  const handleEnd = (result) => {
    console.log('result', result)

    if(!result.destination) return

    const newTodoData = todoData;

    const [reorderedItem] = newTodoData.splice(result.source.index,1)
    
    newTodoData.splice(result.destination.index,0,reorderedItem)
    setTodoData(newTodoData)
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                  <div key={data.id} 
                  {...provided.draggableProps} 
                  ref={provided.innerRef} 
                  {...provided.dragHandleProps} 
                  className={`${snapshot.isDragging ? "bg-gray-400": "bg-gray-100"}
                  flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
                  >
                    
                      <div className="items-center">
                        <input
                          type="checkbox"
                          onChange={() => handleCompleChange(data.id)}
                          defaultChecked={false}
                        />{" "}
                        <span
                          className={
                            data.completed ? "line-through" : undefined
                          }
                        >
                          {data.title}
                        </span>
                      </div>
                      <div className="items-center">
                        <button
                          className="px-4 py-2 float-right"
                          onClick={() => handleClick(data.id)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
