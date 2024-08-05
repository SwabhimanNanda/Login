import "./App.css";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Register" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
