import "./App.css";
import Nav from "./Components/NavBar";
import TextForm from "./Components/TextForm";

function App() {
  return(
    <>
      <Nav title="Text Utils" aboutText="About TextUtils"/>
      <div className="container my-3">
        <TextForm heading="Enter the text to be analysed below" />
      </div>
    </>
  );
}

export default App;
/*export default App;*/
