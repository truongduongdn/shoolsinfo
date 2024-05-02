
import './App.css';

import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<ContactPage />} path='/contacus' />
        <Route element={<allSchool />} Path="/allschool" />
      </Routes>
    
    </div>
  );
}

export default App;
