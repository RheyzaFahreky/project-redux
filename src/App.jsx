import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import CounterComponent from './components/CounterComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserComponent />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
