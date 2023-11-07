import { useState } from 'react';
import './App.css';
import List from './components/Lists.js';
import Form from './components/Form';


export default function App() {

// const btnStyle= {
//   color: "#fff",
//   border: "none",
//   padding: "5px 9px",
//   borderRadius: "50%",
//   cursor: "pointer",
//   float: "right",
// }
// const getStyle= (completed) => {
//   return{
//     padding: "10px",
//     borderBottom: "1px #ccc dotted",
//     textDecoration: completed ? "line-through" :"none"
    
//   }
// }
const [todoData, setTodoData] = useState([
  {
    id : "1",
    title : "공부하기",
    completed : true
  },
  {
    id : "2",
    title : "청소하기",
    completed : false
  }
])

const [value, setValue] = useState("");

// state = {
//   todoData : [
    
//   ],
//   value : "",

// }

//삭제기능
// const handleClick = (id) => {
//   //인수는 id를 받아온다.  필터함수를 통해서 
//   let newTodoData = this.filter((data)=>data.id !== id)
//   // this.setState({todoData: newTodoData})
//   setTodoData(newTodoData)
// }

// //입력감지 함수
// const handleChange = (e) => {
//   // this.setState({value: e.target.value})
//   setValue(e.target.value)
// }

// //데이터추가
const handleSubmit = (e) => {
  //submit 했을때 페이지가 이동되는걸 방지함
  e.preventDefault();

  let newTodo = {
    id: Date.now(),
    title: value,
    completed: false,
  }

  // this.setState({todoData : [...todoData, newTodo],value : ""})
  setTodoData(prev => [...prev, newTodo])
  setValue("")
}

const handleCompleChange = (id) => {
  let newTodoData = todoData.map((data) => {
    if(data.id ===id){
      data.completed = !data.completed;
    }
    return data;
  })
  // this.setState({todoData : newTodoData})
  setTodoData(newTodoData)

}
    return(
      <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
        <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg' >
          <div className='flex justify-between mb-3'>
            <h1>할 일 목록</h1>
          </div>
            <List todoData={todoData}
            setTodoData={setTodoData}
            />
          <Form
          value = {value}
          setValue= {setValue}
          handleSubmit= {handleSubmit}
          />
        
        
        </div>
      </div>
    )
    
}

