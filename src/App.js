import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Footer from "./Components/Footer";
import { useState } from "react";
import Alerts from "./Components/Alerts";
import About from "./Components/About";
import Swal from "sweetalert2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    // setAlert({
    //   msg: message,
    //   type: type,
    // });
    // setTimeout(() => {
    //   setAlert(null);
    // }, 1300);

    Swal.fire({ title: message, icon: type, timer: 1500 });
  };
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#242655";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TEXTuTILS- Dark Mode";
      // setInterval(()=>{
      //   document.title="TEXTuTILS- Download Now"
      // },2000)
      // setInterval(()=>{
      //   document.title="TEXTuTILS- Subscribe Now"
      // },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TEXTuTILS- Light Mode";
    }
  };
  return (
    <BrowserRouter>
      <Navbar title="TEXTuTILS" mode={mode} toggle={toggleMode} />
      <Alerts alert={alert} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container my-5">
              <Textform
                showAlert={showAlert}
                heading="Enter the text below:"
                mode={mode}
              />
            </div>
          }
        />

        <Route  path="/about" element={<About mode={mode} />} />
      </Routes>
      <Footer mode={mode} />
    </BrowserRouter>
  );
}

export default App;
