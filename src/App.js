import React from 'react';
import './App.css';
import Weather from './components/Weather';
import Footer from './components/Footer';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <>


     <BrowserRouter>
     <Routes>
        <Route path="/" exact element={<Weather />} />
        <Route path="/login" exact element={<Login/>} />
     
     </Routes>



     </BrowserRouter>
      <Footer/>
   

    </>
  );
}

export default App;
