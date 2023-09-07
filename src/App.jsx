import { useState } from 'react'

import './App.css'
import Header from'./components/Header'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Header/>
       <div className="bg-indigo-600 w-full h-screen"></div>
       <Sidebar />
    </div>
  )
}

export default App
