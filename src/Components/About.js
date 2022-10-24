import React from 'react'

export default function About(props) {
  let myStyle = {
    color: props.mode==='light' ? '#343a40' : 'white',
    backgroundColor: props.mode==='light' ? 'white' : '#343a40',
    border: '1px solid',
    borderColor: props.mode==='light' ? '#343a40' : 'white',
  };

  return (
    <div className='container' style={{color: props.mode==='light' ? '#343a40' : 'white'}}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                Creator
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>Creator: </strong> This text utils has been created by Nihar Phansalkar. Thank you for using this text util! I hope you enjoyed it :D. Check out my <a href='https://github.com/NiharPhansalkar' target="_blank" rel="noreferrer">GitHub</a> page for more projects.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                Text Utils info
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                TextUtils allows you to analyse your text quickly and efficiently. It is completely free to use and is browser compatible.<br></br>
                This is one of the first react based project that I have created. The CSS is credits to <a href='https://getbootstrap.com/' target="_blank" rel="noreferrer">BootStrap</a>. The rest is React working its JSX magic! It was extremely fun building this project, and hopefully developing in react continues to be a blast!
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
