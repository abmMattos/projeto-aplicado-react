import React, { useState } from 'react';
import './App.css';
import Footer from './components/Body/Footer/Footer';
import Header from './components/Body/Header/Header';
import Main from './components/Body/Main/Main';

function App() {
  return (
    <body>
      <Header />
      <Main />
      <Footer />
    </body>
  );
}

export default App;
