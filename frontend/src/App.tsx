
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Landing, Room} from "./components/Index.ts";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="room" element={<Room/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
