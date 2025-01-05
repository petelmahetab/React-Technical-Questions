

//..First Question
// const tasks = [
//   { id: 1, task: "Buy groceries", completed: false },
//   { id: 2, task: "Walk the dog", completed: false },
//   { id: 3, task: "Complete homework", completed: false },
// ];

// //New Component for the TaskList and pass the above Tasks as Props.
// const TaskList=function({tasks}){
//   if(tasks.length === 0){
//     return <h2>No Tasks Yet..</h2>
//   }
//   return(
//     <ul>
//       {tasks.map((taks)=>(
//         <li id={taks.id} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
//           <span style={{textDecoration:taks.completed?"line-through":"null"}}>
//                    {taks.task}
//           </span>
//         </li>
//       ))}
//     </ul>
//   )
// // }
// function App() {
//   return (
//     <>
//     {/* <h1 style={{textAlign:'center'}}>To do List</h1>
//     <TaskList tasks={tasks}/> */}
    
//     </>
//   )

// }



// Second Question

// export const Greeting = function ({ yourTime }) {
//   const greetings = [
//     { time: "morning", greeting: "Good Morning!" },
//     { time: "afternoon", greeting: "Good Afternoon!" },
//     { time: "evening", greeting: "Good Evening!" },
//   ];

//   const checkTime = greetings.find((time) => time.time === yourTime);
//   return <Message message={checkTime ? checkTime.greeting : "Hello!"} />;
// };

// export const Message = function ({ message }) {
//   return <h1>{message}</h1>;
// };

// const App = function () {
//   const myTime = "afternoon";

//   return (
//     <div>
//       <Greeting yourTime={myTime} />
//     </div>
//   );
// };

// export default App;
import React from 'react'

function App() {
  return (
    <div>
      415
    </div>
  )
}

export default App
