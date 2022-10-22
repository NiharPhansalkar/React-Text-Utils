import React, {useState} from 'react'


export default function TextForm(props) {
    // text = 'new text'; WRONG
    // setText('new text'); Correct
    const [text, setText] = useState("");

    // Handle upper case
    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    // Handle lower case
    const handleLowClick = () => {
        setText(text.toLowerCase())
    }
    // Return length of word
    const wordVal = (givenText) => {
        if (givenText === "") {
            return 0;
        }
        else {
            return text.split(" ").length;
        }
    }
    // Handle funny text
    const handleFunnyClick = () => {
        setText(
            () => {
                
                let newText = text.toLowerCase().split('').map((c) => {
                    return (Math.random() < 0.5) ? c : c.toUpperCase(); 
                });
                
                return (newText.join(""));
            }
        );
    }
    // Handle clearing textarea
    const handleClearClick = () => {
        setText(() => "");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    return(
        <>
            <div className='container' style = {{color: props.mode==='light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                  <textarea 
                    className="form-control" 
                    id="myBox" 
                    onChange={handleOnChange} 
                    rows="10" 
                    placeholder='Enter text here' 
                    value={text}
                    style = {{
                        backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                        color: props.mode === 'light' ? 'black' : 'white',
                    }}
                ></textarea>
                </div>
                <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-dark mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-dark mx-1" onClick={handleFunnyClick}>Convert to Funny Text</button>
                <button className="btn btn-dark mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style = {{color: props.mode==='light' ? 'black' : 'white'}}>
                <h2>Your text summary</h2>
                <p><b>{wordVal(text)}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{(wordVal(text) * 0.0032).toPrecision(1)}</b> minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text.slice(0, 90) : "Enter something to preview here"}</p>
            </div>
        </>
    );
}
