
import './App.css';
import './styles/root.css';
import Footer from './component/Footer';
import Header from './component/Header';
import CatalogSchool from './pages/CatalogSchool';
//import '.p/root.module.css';
function App() {
  return (
    <div className="App">
      <Header />
      <CatalogSchool />
      <div className="footer-container">
      <Footer />
      </div>
    </div>
  );
}

export default App;
