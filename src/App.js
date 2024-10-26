import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import About from './components/About';
import Home from './components/Home';
import Health from './components/Health';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} />
          <Route path="health" element={<Health />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
