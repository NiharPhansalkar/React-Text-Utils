import React, {useState} from 'react'


export default function TextForm(props) {
    // text = 'new text'; WRONG
    // setText('new text'); Correct
    const [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleLowClick = () => {
        setText(text.toLowerCase())
    }
    const wordVal = (givenText) => {
        if (givenText === "") {
            return 0;
        }
        else {
            return text.split(" ").length;
        }
    }
    const handleFunnyClick = () => {
        setText(() => {
            let wordArr = text.split(" ");
            for (let word of wordArr) {
                for (let char of word) {
                    if (Math.ceil(Math.random() * word.length) % 2 === 0) {
                        char = char.toUpperCase();
                    }
                }
            }
            return wordArr.join(" ");
        });
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    return(
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                  <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="10" placeholder='Enter text here' value={text}></textarea>
                </div>
                <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-dark mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-dark mx-1" onClick={handleFunnyClick}>Convert to Funny Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p><b>{wordVal(text)}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{(wordVal(text) * 0.0032).toPrecision(1)}</b> minutes read</p>
                <h2>Preview</h2>
                <p>{text.slice(0, 90)}</p>
            </div>
        </>
    );
}
