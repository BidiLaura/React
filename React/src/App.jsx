import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState(true)
  const [texto, setTexto] = useState("")
  return (
    <>
    <div>
      <h1>Atividade 1 -</h1>
      <button onClick={() => setCount((count) => count + 10)}>
        somar
      </button>
      <button onClick={() => setCount((count) => count - 10)}>
        subitrair
      </button>
      <button onClick={() => setCount((count) => count == 0)}>
        set
      </button>
      <h2>count is {count}</h2>
      </div>
    
    <div>
    <h1>Atividade 2 -</h1>
    <div>
      {
        msg ? <p>BALACOBACO</p> : ""
      }
    </div>
    <button onClick={() => {setMsg(msg ? false : true)}}>Alternar</button>
    </div>
    <div>
      <h1> Atividade 3 -</h1>
      {texto == "SENAI" ? <p> apareci</p> : " "}
      <input type="text" onChange={(e) =>{setTexto(e.target.value)}}/>
    </div>
    </>
  )
}
export default App