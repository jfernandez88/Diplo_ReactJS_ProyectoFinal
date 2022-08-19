import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import InicioPage from './pages/InicioPage';
import NoticiasPage from './pages/NoticiasPage';
import DestacadosPage from './pages/DestacadosPage';
import ContactoPage from './pages/ContactoPage';
import FondosPage from './pages/FondosPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="NoticiasPage" element={<NoticiasPage />} />
          <Route path="DestacadosPage" element={<DestacadosPage />} />
          <Route path="ContactoPage" element={<ContactoPage />} />
          <Route path="FondosPage" element={<FondosPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
