import React, {useState} from "react";
import "./App.css";
import Nav from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import {
  Route,
  Routes,
} from "react-router-dom";

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

      <Routes>
        <Route 
          exact path="/"
          element = {
            <div className="container my-3">
              <TextForm 
                alert={showAlert}
                heading="Enter the text to be analysed below" 
                mode={mode}
              />
            </div>
          }
        />
        <Route 
          exact path="/about"
          element = {
            <About 
              alert={showAlert}
              mode={mode} 
              toggleMode={toggleMode}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
/*export default App;*/
