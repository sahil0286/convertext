import React,{useState} from 'react'

export default function Smalltext() {
    const [text, setText] = useState("")
    const [out, setOut] = useState("")

    const textBox=(event)=>
  {
    setText(event.target.value)
    if(event.target.value.length===0)
    {
        setOut("")
    }
    else
    {
        setOut(text.toLowerCase())
    }
  }
    const x=()=>{}

    return (
    <>
        <div className="container input-group mb-3 mt-3">
            <textarea className="form-control" value={text} id="text" rows="8" onChange={textBox} placeholder='Type or paste your content here'></textarea>
            <textarea className="form-control" value={out} id="out" onChange={x} rows="8" placeholder='Output'></textarea>
        </div>
    </>
  )
}
