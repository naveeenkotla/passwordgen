import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heads from './Heads'
import Iti from './Iti.jsx';

function App() {
  let [rangee,setrange]=useState(8)
  let [num,setnum]=useState(false)
  let [symm,setsym]=useState(false)
  let [passs,setpaess]=useState("your pass")
  const sepass=useCallback(()=>{
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      let pass=""
      if(num) str+="1234567890"
      if(symm) str+="!@#$%^&*()~<>"
      for (let i = 1; i<=rangee; i++) {
        let c=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(c)
      }
      setpaess(pass)
  },[num,symm,rangee,setpaess])
  const newseppass=useEffect(()=>{
    sepass()
  },[num,symm,rangee,sepass])

  return (
    <>
    <div className='sen'>
<h1>PASSWORD GENERATOR</h1>
    </div>
    <div className='sen'>
<input type='text' value={passs} readOnly></input>  
<button>copy</button>
    </div>
    <div className='sen'>
<input 
   type="range" 
   min={8}
   max={20}
   defaultValue={8}
   onChange={(e)=>{setrange(e.target.value)}}
   /><label>range:{rangee}</label>
   <input type="checkbox" onClick={()=>{setnum(!(num))}} /><label>Number</label>
   <input type="checkbox" onClick={()=>{setsym(!(symm))}}  /><label>Symbols</label>
    </div>
    </>
  )
}

export default App
