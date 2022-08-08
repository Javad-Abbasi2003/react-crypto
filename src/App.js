import './App.css';
import { Routes, Route } from 'react-router-dom';

//Components
import Homepage from './components/Homepage';
import Details from "./components/Details"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:coin" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
