<?php
// Incluir conexión a la base de datos
include 'conexion.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Verificar si el método de solicitud es POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener y decodificar el cuerpo de la solicitud JSON
    $data = json_decode(file_get_contents("php://input"), true);

    // Asignar los datos del formulario a variables
    $nombre = $data['nombre'];
    $apellido = $data['apellido'];
    $cedula = $data['cedula'];
    $fecha_nacimiento = $data['fecha_nacimiento'];
    $email = $data['email'];
    $username = $data['username'];
    $password = $data['password']; // Considera encriptar esta contraseña

    // Validar los datos aquí (opcional, pero recomendado)

    // Preparar la consulta SQL
    $query = "INSERT INTO usuarios (nombre, apellido, cedula, fecha_nacimiento, email, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sssssss", $nombre, $apellido, $cedula, $fecha_nacimiento, $email, $username, $password);

    // Ejecutar la consulta
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Usuario registrado exitosamente"]);
        
    } else {
        echo json_encode(["success" => false, "message" => "Error al registrar usuario"]);
    }

    // Cerrar la declaración y la conexión
    $stmt->close();
    $conn->close();
} else {
    // Manejar error si no es una solicitud POST
    echo json_encode(["success" => false, "message" => "Método de solicitud no válido"]);
}
?>
