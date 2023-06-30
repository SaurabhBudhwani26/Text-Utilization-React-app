import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert   from "./components/Alert";
import About from "./components/About";
import { useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom"

function App() {
 // Weather dark mode is enabled or not
  const [mode, setMode] = useState("light")
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#1a1a1a";
      showAlert("Dark mode has been enebled", "success")
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enebled", "success")
    }
  }

  return (
    <>
    <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} mode={mode}/>
    <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert} mode={mode}/>} />
      <Route path="/about" element={<About mode={mode}/>}/>
    </Routes>
    
    {/* <About/> */}
    </>
   
  );
}

export default App;
