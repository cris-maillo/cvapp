// import { useState } from 'react'
import './App.css'

import Builder from './components/Builder'
import CV from "./components/CV";

function App() {
  return (
    <div className='App'>
      <h2>CV Builder</h2>
      <div className='Content'>
        <Builder className="Builder"/>
        <CV className="CV"/>
      </div>
    </div>
  )
}

export default App
