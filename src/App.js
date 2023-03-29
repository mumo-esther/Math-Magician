import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Navbar from './components/Navbar';
import Quote from './components/Qoute';
import HomePage from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Qoute" element={<Quote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
