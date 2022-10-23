import React, {useState} from "react";
import "./App.css";
import Nav from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  // Check if darkmode is enabled or not
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark Mode has been enabled!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled!", "success");
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
      <Alert
        alert={alert}
      />
      <div className="container my-3">
        <TextForm 
          alert={showAlert}
          heading="Enter the text to be analysed below" 
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
/*export default App;*/
