import { useState } from 'react'
import './App.css'
import Juan from "./assets/Juan.png"
function Auau() 
{
  const [count, setCount] = useState(8.005)
  const [texto, setTexto] = useState(0)
  return (
    <>
        <div className='post'>
        <h1>Juan.</h1>
        <img src={Juan} />
            <button onClick={() => setCount((count) => count + 1)}>
                like
            </button>
        <h2>{count}</h2>
        </div>
        
        <div>
        <h1> Atividade 3 -</h1>
        {texto == "SENAI" ? <p> apareci</p> : " "}
        <input type="text" onChange={(e) =>{setTexto(e.target.value)}}/>
        </div>
    </>)
}
export default Auau