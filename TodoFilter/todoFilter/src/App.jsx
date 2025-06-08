import './App.css'
import { useState } from 'react'

function App() {
  // We are now creating an Todo's filter.
   //3 states varibles
   const [todos, setTodos] = useState([]);
   const [inputText, setInputText] = useState('')
   const [filter, setFilter] = useState('all') //all,completed,uncompleted

  //  To handle creating Todo's Right.
        const handleTodos=()=>{
                if(inputText.trim()==='') return;
                const newTodo={
                  id:Date.now(),
                  text:inputText,
                  completed:false
                }
                setTodos(pre=>[...pre,newTodo]);
                setInputText('');
        }


        const ToggleTodos=(id)=>{
            setTodos(pre=> 
              pre.map((td)=>{
                return td.id === id ?{...td,completed:!td.completed}:td
              }))
        }

        const filterTodos=todos.filter((td)=>{
          if(filter === 'completed') return td.completed;
          if(filter === 'pending') return !td.completed;
          return true;
        })
  // console.log(inputText);


  return (
    <>
      <div>
        <h2>👨✈️ TODO's Filter.</h2>
        <div>
               <input  type='text' style={{width:'100%',height:'40px',textAlign:'center',color:'white',fontSize:'15px',borderRadius:'5px'}}
              placeholder='Enter todos text here' onChange={(e)=>setInputText(e.target.value)}/>
               <button style={{marginTop:'10px'}} onClick={handleTodos}> Add Todo's</button>
        </div>

        <div>
        <button onClick={()=>setFilter('all')} disabled={filter === 'all'}>All</button>
        <button onClick={()=>setFilter('completed')} disabled={filter === 'completed'}>Completed</button>
        <button onClick={()=>setFilter('pending')} disabled={filter === 'pending'}>pending</button>
        </div>


        <ul style={{ marginTop: '20px', padding: 0 }}>
        {filterTodos.length === 0 ? (
          <p>No todos to show.</p>
        ) : (
          filterTodos.map(todo => (
            <li
              key={todo.id}
              style={{
                listStyle: 'none',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <button onClick={() => ToggleTodos(todo.id)}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
            </li>
          ))
        )}
      </ul>
      </div>
    </>
  )
}

export default App
