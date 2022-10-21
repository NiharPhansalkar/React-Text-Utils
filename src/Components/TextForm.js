import React, {useState} from 'react'


export default function TextForm(props) {
    // text = 'new text'; WRONG
    // setText('new text'); Correct
    const [text, setText] = useState();

    const handleUpClick = () => {
        setText(text.toUpperCase())
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    return(
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="10" placeholder='Enter text here' value={text}></textarea>
            </div>
            <button className="btn btn-dark" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    );
}
