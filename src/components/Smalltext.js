import React from 'react'

export default function Smalltext() {
    const [text, setText] = useState("")

    const textBox=(event)=>
  {
    setText(event.target.value)
  }

    return (
    <>
        <div className="container input-group mb-3 mt-3">
            <textarea className="form-control" value={text} id="text" rows="8" onChange={textBox} placeholder='Type or paste your content here'></textarea>
            <textarea className="form-control"  id="text" rows="8" placeholder='Output'></textarea>
        </div>
    </>
  )
}
