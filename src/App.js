import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Health from './components/Health';
import Arrival from './components/Arrival';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/health" element={<Health />}/>
      </Routes>
    </>
  )
}

export default App;
