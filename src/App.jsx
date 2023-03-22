import { useState } from 'react'
import './App.css'
import { Category } from './components/Category'
import { Gifs } from './components/Gifs'
import { SearchGifs } from './components/SearchGifs';
 
function App({setCategory,category}) {
  return (
    <div className="App">
        <h2>Gifs</h2>
        <Category setCategory={category}/>
        <Gifs category={category}/>  
    
    </div>
  )
}

export default App
