import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Health from './components/Health';
import Elements from './components/Elements'
import LogIn from './components/LogIn';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />}/>
        <Route path="/profile" element={<Health />}/>
        <Route path="/input" element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
