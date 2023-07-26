// import { useState } from 'react'
import './App.css'

import Builder from './components/Builder'
import CV from "./components/CV";

function App() {
  return (
    <div className='App'>
      <h1>CV Builder</h1>
      <Builder className="Builder"/>
      <CV className="CV"/>
    </div>
  )
}

export default App
