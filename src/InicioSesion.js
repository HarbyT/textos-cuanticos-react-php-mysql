// InicioSesion.js

import React from 'react';

function InicioSesion() {
  return (
    <div className="form-container">
      <form>
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" required />
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Ingresar</button>
        <a href="../src/error.html">¿Olvidaste tu contraseña?</a>
      </form>
    </div>
  );
}

export default InicioSesion;
