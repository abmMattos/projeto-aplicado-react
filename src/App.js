import './App.css';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
