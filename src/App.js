import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import './App.css';
import About from './About'
import ContactInfo from './ContactInfo'
import WorkExamples from './WorkExamples'

export default function App() {
  return (
    <BrowserRouter>
      <div>

        <Link to="/About">Go to About</Link><br/>
        <Link to="/Contact">Go to Contact</Link><br/>
        <Link to="/WorkExp">Go to Works</Link><br/>
        
        <Routes>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<ContactInfo />}></Route>
          <Route path="/WorkExp" element={<WorkExamples />}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}
