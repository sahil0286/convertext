import React from 'react'

export default function Inputarea(props) {
  return (
    <div className='container mt-2'>
        <h3>{props.inpHeading}</h3>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.inpSubHeading}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
        </div>
        <div className='d-flex justify-content-center'>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
        </div>
    </div>
  )
}

Inputarea.defaultProps = {
    inpHeading:"Update Input area Heading",
    inpSubHeading:"Update Input area Sub-Heading",
}