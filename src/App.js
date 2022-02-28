import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import TextForm from "./components/TextForm";
import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import ColorPalette from "./components/ColorPalette";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // checks weather dark mode is true or false

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const changeMode = () => {
    console.log("change mode clicked");
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";

      setMode("dark");
      showAlert("dark mode has been enabled", "success");
      // setInterval(() => {
      //   document.title = "Aniket Salunke";
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <div className="App">
      {/* <TextForm showAlert={showAlert} /> */}
      {/* <About /> */}

      <Router>
        <Header title="Text Utils" mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} />} />
          <Route exact path="/colorpalette" element={<ColorPalette />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
