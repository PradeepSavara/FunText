// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import TextForm from './components/TextForm';
// import { css } from '@emotion/react';
import React,{useState} from 'react';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) =>
  {
    setAlert({
      msg: message,
      type : type
    });
    setTimeout(() =>{
      setAlert(null);
    },2000);
  };
  const toggleMode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#131554";
      showAlert('dark mode enabled !','success');
    }
    else if (mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert('light mode is enabled !','success');

    }
  };



  return (
    <>
    <Router>
    <Navbar title='!FunText' mode ={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      {/* <TextForm mode={mode} showAlert={showAlert}/> */}
      <Routes>
        <Route path="/"   element={<TextForm mode={mode} showAlert={showAlert} />}/>
        <Route path="/about"    element={<About mode={mode}/>}/>
        <Route path="/contact" element={<Contact mode={mode}/>}/>
      </Routes>
</Router>
</>
  );
}

export default App;
