
import React, { useState } from 'react'
import Create from './components/Create';
import Show from './components/Show';

const App = () => {
  
  const [data,setdata] = useState( JSON.parse(localStorage.getItem("data")) || []);


  return (
    <div>

      <Create data={data} setdata={setdata} />

      <Show data={data} setdata={setdata} />

    </div>
  )
}

export default App