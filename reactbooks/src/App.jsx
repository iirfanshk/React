import React, { useEffect, useState } from 'react'
import Greetings from './Greetings'

export default function App() {
  // let name = "Irfan"
  const[name, setName] = useState("Irfan");
  const[color, setColor] = useState("Red");
  const[count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000)
  });


  return (
    <div>
      <Greetings name={name}/>
      <button onClick={() => setName("Shaik")}>click for change</button>
      <h2>My fav color is {color}!</h2>
      <button onClick={() => setColor("Black")}>Reveal color</button>
      <h2>count is {count}!</h2>
      <button onClick={() => setCount(count + 1)}>count</button>
      <h1>The time starts now {count} !</h1>
    </div>
  );
}
