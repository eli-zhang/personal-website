import React from 'react';
import './Homepage.css';
import MainHeader from '../../components/MainHeader/MainHeader'
import Navbar from '../../components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar tab={"Home"}/>
      <MainHeader/>
    </>
  );
}

export default App;
