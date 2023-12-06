import './App.css';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  
    <div className="app">

    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />

      </Routes>
    </main>
    <Footer />
  </div>
  );
}

export default App;
