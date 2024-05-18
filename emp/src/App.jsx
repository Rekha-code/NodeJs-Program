import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Empinfo from "./Empinfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newemp from "./Newemp";
import Updateemp from "./Updateemp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Empinfo />} />
          <Route path="/Newemp" element={<Newemp />} />
          <Route path="/Updateemp" element={<Updateemp />} />
        </Routes>
      </BrowserRouter>
      {/* <Empinfo/> */}
    </>
  );
}

export default App;
