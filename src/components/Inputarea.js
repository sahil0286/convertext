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

  const inTxt=()=> {
    var result = "";
  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
    setText(result);
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
  
  const titTxt=()=> {
    setText(text.replace(/\w\S*/g, function(txt){
      if(['a', 'an', 'the', 'and', 'in', 'on'].includes(txt.toLowerCase())){
        return txt.toLowerCase();
      }else{
        return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
      }
    }));
  }

    return (
    <div className='container mt-2'>
        <h3>{props.inpHeading}</h3>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.inpSubHeading}</label>
            <textarea className="form-control" value={text} onChange={textBox} id="text" rows="8" placeholder='Type or paste your content here'></textarea>
        </div>
        <div className='container'>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={upperTxt}>Upper Case</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={lowerTxt}>Lower Case</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={senTxt}>Sentence Case</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={capTxt}>Capitalize Case</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={alTxt}>aLtErNaTiNg cAsE</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={inTxt}>InVeRsE CaSe</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={titTxt}>Title Case</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={downTxt}>Download Text</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={copyTxt}>Copy to Clipboard</button>
            <button type="button" className="btn btn-secondary btn-sm my-2 mx-2" onClick={clrText}>Clear </button>
        </div>
        <h5>Character Count: {text.length} | Word Count: {text.split(/\s+/).filter(word => word !== '').length} | Line Count: {text.split(/\r\n|\r|\n/).length}</h5>
    </div>
  )
}

Inputarea.defaultProps = {
    inpHeading:"Update Input area Heading",
    inpSubHeading:"Update Input area Sub-Heading",
}