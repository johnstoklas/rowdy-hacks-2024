import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Health from './components/Health';
import Elements from './components/Elements'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/health" element={<Health />}/>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
