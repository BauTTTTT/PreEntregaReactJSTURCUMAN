import React from 'react';
import { Link } from 'react-router-dom';

const Catalogo = () => {
const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 15 },
    // Agrega más productos según sea necesario
];

return (
    <div className="catalogo">
    <h2>Catálogo de Productos</h2>
    <ul>
        {productos.map(producto => (
        <li key={producto.id}>
            <span>{producto.nombre}</span>
            <span>${producto.precio}</span>
            <Link to={`/producto/${producto.id}`}>Ver Detalles</Link>
        </li>
        ))}
    </ul>
    </div>
);
}

export default Catalogo;