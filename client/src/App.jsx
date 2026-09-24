import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState("")

  useEffect(()=>{
  fetch(`${import.meta.env.VITE_DEVLOPEMENT_URL}/api/message`)
  .then((data)=>{
    return data.json()
  }).then((data)=>{
    setData(data.message)
    console.log(data);
    
  }).catch((error)=>{
    console.log("ERROR::",error);
  })
  },[])

  return (
    <>
      <div>
          <h1>Welcome to deploy.</h1>
          <p>Data:: {data}</p>
      </div>
    </>
  )
}

export default App
