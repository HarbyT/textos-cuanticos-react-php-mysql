import React, { useState } from 'react';
import './App.css'; // Importa tus estilos CSS aquí

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleToggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={`header ${isActive ? 'active' : ''}`}>
      <div className="nav-container">
        <a href="/" className="logo">
          <img src="TextosCuanticoslogo.png" alt="Logo de Textos Cuánticos" />
        </a>
        <button className="nav-toggle" aria-label="Abrir menú de navegación" onClick={handleToggleNav}>
          <span className="hamburger"></span>
        </button>
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/cursos">Cursos</a></li>
            <li><a href="/inicioSesion">Inicia sesión</a></li>
            <li><a href="/tutorias">Tutorías</a></li>
            <li><a href="/calendario">Calendario</a></li>
            <li><a href="/perfil">Perfil</a></li>
            <li><a href="/configuracion">Configuración</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
