import React, { useEffect, useState } from 'react'
import   "./App.css"

const App = () => {

  const[data, setdata] = useState([])
  const[show, setshow] = useState(false)
  
  useEffect(() => {
     const Api = 'https://jsonplaceholder.typicode.com/posts'
    fetch(Api).then(res => res.json()).then(data => setdata(data))
   },[])

   
  return (
  <div className='container'>
     <h1> FAQ</h1>
     

       
  </div>
   

  )
}

export default App