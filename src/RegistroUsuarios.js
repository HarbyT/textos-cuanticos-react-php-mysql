import React, { useState } from 'react';

function RegistroUsuarios() {
    // Estado para cada campo del formulario
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Manejador para el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            nombre,
            apellido,
            cedula,
            fecha_nacimiento: fechaNacimiento,
            email,
            username,
            password,
        };

        fetch('http://localhost/textos-cuanticos/api/registroUsuario.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Manejar la respuesta aquí, como mostrar un mensaje de éxito/error
        })
        .catch(error => {
            console.error('Error:', error);
            // Manejo de errores
        });
    };

    return (
        <div className="form-container">
            <h2>Registro de usuarios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" required value={nombre} onChange={(e) => setNombre(e.target.value)} />

                <label htmlFor="last-name">Apellido:</label>
                <input type="text" id="last-name" name="last-name" required value={apellido} onChange={(e) => setApellido(e.target.value)} />

                <label htmlFor="id-number">Cédula:</label>
                <input type="text" id="id-number" name="id-number" required value={cedula} onChange={(e) => setCedula(e.target.value)} />

                <label htmlFor="birthdate">Fecha de nacimiento:</label>
                <input type="date" id="birthdate" name="birthdate" required value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />

                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="username">Nombre de usuario:</label>
                <input type="text" id="username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default RegistroUsuarios;
