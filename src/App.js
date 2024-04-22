
import Footer from './component/Footer';
import Header from './component/Header';
import CatalogSchool from './pages/CatalogSchool';
import style from './App.module.css';
import ReviewDetailPage from './pages/ReviewDetailPage';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<CatalogSchool />} /> {/* Home route */}
        <Route path="/ReviewDetailPage" element={<ReviewDetailPage />} />
      </Routes>
      <Header />
      <CatalogSchool />
      
      <ReviewDetailPage  />

      <Footer />
    </div>
  );
}

export default App;
