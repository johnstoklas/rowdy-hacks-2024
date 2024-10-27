import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Health from './components/Health';
import Arrival from './components/Arrival';
import LogIn from './components/LogIn';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />}/>
        <Route path="/health" element={<Health />}/>
        <Route path="/home" element={<Home />}/>

      </Routes>
    </>
  )
}

export default App;
