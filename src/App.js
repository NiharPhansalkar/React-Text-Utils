import React, {useState} from "react";
import "./App.css";
import Nav from "./Components/NavBar";
import TextForm from "./Components/TextForm";

function App() {
  // Check if darkmode is enabled or not
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return(
    <>
      <Nav 
        title="Text Utils" 
        aboutText="About TextUtils" 
        mode={mode} 
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm 
          heading="Enter the text to be analysed below" 
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
/*export default App;*/
