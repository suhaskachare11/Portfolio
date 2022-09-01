import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/work' element={ <Work/>}/>
          <Route exact path='/about' element={ <About/>}/>
          <Route exact path='/contact' element={ <Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
