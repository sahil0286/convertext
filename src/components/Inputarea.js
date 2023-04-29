import React ,{useState} from 'react'

export default function Inputarea(props) {
  const [text, setText] = useState("")
  
  const textBox=(event)=>
  {
    setText(event.target.value)
  }

  const upperTxt=()=>
  {
    setText(text.toUpperCase())
  }

  const lowerTxt=()=> {
    setText(text.toLowerCase())
  }
  const senTxt=()=> {
    setText(text[0].toUpperCase()+text.slice(1))
  }
  const capTxt=()=> {
    setText(text.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' '));
  }
  const alTxt=()=> {
    var result = "";
  for (var i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      result += text.charAt(i).toUpperCase();
    } else {
      result += text.charAt(i).toLowerCase();
    }
  }
    setText(result);
  }

    return (
    <div className='container mt-2'>
        <h3>{props.inpHeading}</h3>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.inpSubHeading}</label>
            <textarea className="form-control" value={text} onChange={textBox} id="text" rows="8"></textarea>
        </div>
        <div className='container'>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={upperTxt}>Upper Case</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={lowerTxt}>Lower Case</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={senTxt}>Sentence Case</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={capTxt}>Capitalize Case</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={alTxt}>aLtErNaTiNg cAsE</button>
        </div>
        {/* <p>`Character Count: ${charCnt} | Word Count: ${wordCnt} | Line Count: ${lineCnt}`</p> */}
        <p className='container text-center mt-2'>Copyright ©2023-2030 converText Ltd | Concept by <a href="/">Sahil Fakir</a> | <a href="/">Privacy Policy</a> | <a href="/">Terms of Use</a> | <a href="/">Sitemap</a> | <a href="/">About</a> </p>
    </div>
  )
}

Inputarea.defaultProps = {
    inpHeading:"Update Input area Heading",
    inpSubHeading:"Update Input area Sub-Heading",
}