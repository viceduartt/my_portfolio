import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Cursor from "./components/Cursor";

function App() {

  return (
    <>
      <Cursor></Cursor>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Projects" element={<Projects/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
