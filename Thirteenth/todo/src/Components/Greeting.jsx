import React from 'react'

//This is Helper Function for Checking current and Input time is EQUAL..
export const Greeting=function({yourTime}){
const greetings = [
    { time: "morning", greeting: "Good Morning!" },
    { time: "afternoon", greeting: "Good Afternoon!" },
    { time: "evening", greeting: "Good Evening!" },
];

  const checkTime=greetings.find((time)=>time.time===yourTime);
  return <Message message={checkTime ? greetings :'Hello.!'}/>;
}

export const Message=function({message}){
    return <h1>{message}</h1>
}

// export default Message