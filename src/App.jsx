import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
    const [data,setData] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(()=>{
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${count}`)
      .then((res)=>{
        setData(res.data.results)
      })
      .catch(console.log("error al conectar "))
      
    },[data])
   
    
    
      
   
   

    console.log(data);
    console.log(count);


    const Atras = () => {
        setCount((data) => data - 10);
    } 
    const Siguiente = () => {
      setCount((data) => data + 10);

    }
    const datos = data.map((item,index)=>(
        
      (<ul> 
        
        <li key={index}>{item.name}</li>
        <li key={index}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+count}.png`}></img></li>
      </ul>)

    ))
  


    
  return (
    <>
      <div>

        <div>

          {datos}

        </div>
      <button onClick={Atras}> ← </button>
      <button onClick={Siguiente}> → </button>
      </div>
    </>
  )
}

export default App
