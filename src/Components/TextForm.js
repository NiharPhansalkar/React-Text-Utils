import React, {useState} from 'react'


export default function TextForm(props) {
    // text = 'new text'; WRONG
    // setText('new text'); Correct
    const [text, setText] = useState("");

    // Handle upper case
    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.alert("Converted to UpperCase!", "success");
    }
    // Handle lower case
    const handleLowClick = () => {
        setText(text.toLowerCase())
        props.alert("Converted to LowerCase!", "success");
    }
    // Handle extra spaces
    const handleSpaceClick = () => {
        setText(text.replace(/\s+/g, " ").trim());
        props.alert("Extra spaces removed!", "success");
    }
    // Return length of word
    const wordVal = (givenText) => {
        return text.split(/\s+/).filter(value => value !== "").length;
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
        props.alert("Converted to Funny Text!", "success");
    }
    // Handle clearing textarea
    const handleClearClick = () => {
        setText(() => "");
        props.alert("Cleared the TextArea!", "success");
    }
    // Handle copying from textarea
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.alert("Copied text to clipboard!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    return(
        <>
            <div className='container' style = {{color: props.mode==='light' ? 'black' : 'white'}}>
                <h1 className="mb-3">{props.heading}</h1>
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
                        resize: "none",
                        overflowY: "auto",
                    }}
                ></textarea>
                </div>
                <button disabled={text.split(" ").filter(value => value !== "").length === 0} className="btn btn-dark mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.split(" ").filter(value => value !== "").length === 0} className="btn btn-dark mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.split(" ").filter(value => value !== "").length === 0} className="btn btn-dark mx-1 my-1" onClick={handleSpaceClick}>Remove Extra Spaces</button>
                <button disabled={text.split(" ").filter(value => value !== "").length === 0} className="btn btn-dark mx-1 my-1" onClick={handleFunnyClick}>Convert to Funny Text</button>
                <button disabled={text.split(" ").filter(value => value !== "").length === 0} className="btn btn-dark mx-1 my-1" onClick={handleCopyClick}>Copy Text to Clipboard</button>
                <button disabled={text.split(" ").filter(value => value !== "").length === 0} className="btn btn-dark mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style = {{color: props.mode==='light' ? 'black' : 'white'}}>
                <h2>Your text summary</h2>
                <p><b>{wordVal(text)}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{(wordVal(text) * 0.0032).toPrecision(1)}</b> minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text.slice(0, 90) : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
