import React ,{useState} from 'react'

const Textform = (props) => {
    const uppChange=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
        

    }
    const lowChange=()=>{
        let newtext=text.toLowerCase()
        setText(newtext);
        props.showAlert("Converted to lowercase","success")
    }
    const handleCopy=()=>{
        let text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied successfully","success")
    }
    const handleSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces has been removed","success")
    }
    const resChange=()=>{
        let newtext=""
        setText(newtext);
        props.showAlert("Reset successfully","success")
    }
    const buttonOnChange=(event)=>{
        setText(event.target.value)
    }
    const[text, setText]=useState("");
     return (
   <>
  <div className="container mb-3 ">
    <h3 style={{color:props.mode=='light'?'black':'white'}}>{props.heading}</h3>
    <textarea className="form-control" style={{backgroundColor: props.mode=='light'?'white':'grey',color:props.mode=='light'?'black':'white'}}value={text} onChange={buttonOnChange} id="myBox" rows="9"></textarea><br/>
    </div>
    <div className="box1">
    <button className={`btn btn-${props.mode=='light'?'success':'dark'} mx-2 my-1`} onClick={uppChange}>Convert to UPPERCASE</button> 
    <button className={`btn btn-${props.mode=='light'?'success':'dark'} mx-2 my-1`}onClick={lowChange}>Convert to lowercase</button>
    <button className={`btn btn-${props.mode=='light'?'success':'dark'} mx-2 my-1`} onClick={handleCopy}>Copy text</button>
    <button className={`btn btn-${props.mode=='light'?'success':'dark'} mx-2 my-1`} onClick={handleSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-danger mx-2" onClick={resChange}>Reset</button>
    </div><hr/>
   
     
  <div className="container mx-4"style={{color:props.mode=='light'?'black':'white'}}>
    <h4><u>Text Summary</u></h4>
    <p> <i>{text.split(" ").filter((element)=>{return element.length!=0}).length} words & {text.length} characters</i></p>
    <p> {0.008 *text.split(" ").length} minutes to read</p><hr/>
    <h4>Preview</h4>
    <p>{text.length>0?text:"Enter something in the textbox to preview"}</p><hr/>
  </div>
   </>
  )
}

export default Textform