import React ,{useState}from 'react'

export default function TextForm(props) {

  const toUpper = () =>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('converted to UpperCase!','success');
  }

  const toLower = () =>
  {
    let newTex = text.toLowerCase();
    setText(newTex)
    props.showAlert('converted to LowerCase!','success');
  }
  const toClear = () =>
  {
    setText("")
    props.showAlert('text is cleared!','success');
  }
  const toReverse = () =>
  {
    setText(text.split('').reverse().join(''))
    props.showAlert('text is reversed!','success');
  }
  const toCopy = () =>
  {
    var name = document.getElementById("exampleFormControlTextarea1");
    name.select();
    navigator.clipboard.writeText(name.value);
    props.showAlert('text is copied !','success');
  }
  const toRemoveExtraSpaces = () =>
  {
    var extra = text.split(/[ ]+/);
    setText(extra.join(" "));
    props.showAlert('extra spaces are removed!','success');
  }
  const onchange = (event)=>
  {
    setText(event.target.value)
  }
  const [text,setText] = useState('Find the number of characters you entered...');

  return (
    <>
  <div className="container">
  <div className="mb-3">
  <div className={`h2 text-${props.mode ==='light'?'dark':'white'}`}>Let's try something new with FunText! :</div>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={onchange} style={{backgroundColor:props.mode==='light'?'white':'#131554',color:props.mode==='light'?'black':'white'}}></textarea>
  <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={toUpper}>toUpperCase</button>
  <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={toLower}>toLowerCase</button>
  <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={toReverse}>toReverse</button>
  <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={toCopy}>toCopy</button>
  <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={toRemoveExtraSpaces}>toRemoveExtraSpaces</button>

  <button disabled={text.length===0}className="btn btn-primary my-2 mx-2" onClick={toClear}>toClear</button>
</div>
</div>

    <div className="container">
      <div className={`h2 text-${props.mode ==='light'?'dark':'white'}`}>Description Details:</div>
      <p style={{color:props.mode==='light'?'black':'white'}}>text contains: {text.split(" ").filter((element)=>{return element.length!== 0}).length} words and {text.length} characters.</p>
      <p className={`text-${props.mode==='light'?'black':'white'}`} >{0.008 * text.split(" ").length} Minutes read.</p>
    </div>

    <div className="container">
      <div className={`h2 text-${props.mode ==='light'?'dark':'white'}`} >Preview :</div>
      <p style={{color:props.mode==='light'?'black':'white'}}>{text.length > 0? text:'Nothing here to preview...'}</p>
    </div>
</>
  )
}
