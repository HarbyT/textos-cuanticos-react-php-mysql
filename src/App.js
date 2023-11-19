import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Asegúrate de importar BrowserRouter y Routes

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import RegistroUsuarios from './RegistroUsuarios';
import InicioSesion from './InicioSesion';
import Cursos from './cursos';

function App() {
  return (
    <Router> {/* Envuelve todo el contenido en el componente Router */}
      <div className="App">
        <Header />
        <Main />
        
        <Routes>
          <Route path="/registroUsuarios" element={<RegistroUsuarios />} />
          {/* Otras rutas y componentes */}
          <Route path="/inicioSesion" element={<InicioSesion />} /> {/* Corregido */}
          <Route path="/cursos" element={<Cursos />} /> {/* Corregido */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
