import React ,{useState} from 'react'

export default function Binary(props) {
  const [text, setText] = useState("")

  const textBox=(event)=>
  {
    setText(event.target.value)
  }

  const binaryf=()=>
  {
    let binary = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const binaryCode = charCode.toString(2);
    binary += binaryCode.padStart(8, '0') + ' '; // Pad with zeros and add a space
  }
    setText(binary.trim())
  }

  const clrText=()=> {
    setText("");
  }

  const copyTxt=()=> {
    var input = document.createElement("input");
    input.setAttribute("value", text);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }
  
  const downTxt=()=> {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "converText.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
  
    return (
    <div className='container mt-2'>
        <h3>{props.inpHeading}</h3>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.inpSubHeading}</label>
            <textarea className="form-control" value={text} onChange={textBox} id="text" rows="8" placeholder='Type or paste your content here'></textarea>
        </div>
        <div className='container text-center my-2'>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={binaryf}>{props.btName}</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={downTxt}>Download Text</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={copyTxt}>Copy to Clipboard</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={clrText}>Clear </button>
        </div>
        <h5>Character Count: {text.length} | Word Count: {text.split(/\s+/).filter(word => word !== '').length} | Line Count: {text.split(/\r\n|\r|\n/).length}</h5>
    </div>
  )
}

Binary.defaultProps = {
    inpHeading:"Update Input area Heading",
    inpSubHeading:"Update Input area Sub-Heading",
    btName:"Update Button Name",
}