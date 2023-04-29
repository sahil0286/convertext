import React from 'react'

export default function Inputarea(props) {
  return (
    <div className='container mt-2'>
        <h3>{props.inpHeading}</h3>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.inpSubHeading}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
        </div>
        <div>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
        </div>
        {/* <p>`Character Count: ${charCnt} | Word Count: ${wordCnt} | Line Count: ${lineCnt}`</p> */}
        <div className='d-flex justify-content-center mt-2'>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
        </div>
        <p className='text-center mt-2'>Copyright ©2023-2030 converText Ltd | Concept by <a href="/">Sahil Fakir</a> | <a href="/">Privacy Policy</a> | <a href="/">Terms of Use</a> | <a href="/">Sitemap</a> | <a href="/">About</a> </p>
    </div>
  )
}

Inputarea.defaultProps = {
    inpHeading:"Update Input area Heading",
    inpSubHeading:"Update Input area Sub-Heading",
}