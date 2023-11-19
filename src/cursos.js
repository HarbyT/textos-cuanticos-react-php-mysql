import React, { useState } from 'react';

function Cursos() {
    const [cursoId, setCursoId] = useState(''); // Suponiendo que eliges un curso
    const [usuarioId, setUsuarioId] = useState(''); // Este debería ser el ID del usuario actual

    const handleInscripcion = (event) => {
        event.preventDefault(); // Para evitar que la página se recargue

        fetch('http://localhost/api/inscribirUsuario.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ curso_id: cursoId, usuario_id: usuarioId }),
        })
        .then(response => response.json())
        .then(data => {
            // Aquí manejas la respuesta. Por ejemplo, mostrar un mensaje de éxito/error
            console.log(data);
        })
        .catch(error => {
            // Manejo de errores
            console.error('Error:', error);
        });
    };

    return (
        <div className="inscripcion-curso">
            <form onSubmit={handleInscripcion}>
                {/* Aquí podrías tener un selector de cursos */}
                <input
                    type="text"
                    value={cursoId}
                    onChange={(e) => setCursoId(e.target.value)}
                    placeholder="ID del Curso"
                />
                <button type="submit">Inscribirse en el Curso</button>
            </form>
        </div>
    );
}

export default Cursos;
