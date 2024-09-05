import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoticiasPage from './components/NoticiasPage';
import DeportesPage from './components/DeportesPage';
import PoliticaPage from './components/PoliticaPage';


const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        {/* Barra de navegación */}
        <Navbar />

        {/* Contenido principal */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<NoticiasPage />} />
            <Route path="/deportes" element={<DeportesPage />} />
            <Route path="/politica" element={<PoliticaPage />} />
          </Routes>
        </main>

        {/* Pie de página */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
