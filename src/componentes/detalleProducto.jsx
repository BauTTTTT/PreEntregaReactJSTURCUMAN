import React from 'react';

const DetalleProducto = ({ match }) => {
  // Suponiendo que tienes un conjunto de productos con detalles
const productos = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1' },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2' },
    // Agrega más productos con detalles según sea necesario
];

const productoId = parseInt(match.params.id);
const producto = productos.find(p => p.id === productoId);

if (!producto) {
    return <div>Producto no encontrado</div>;
}

return (
    <div className="detalle-producto">
    <h2>{producto.nombre}</h2>
    <p>{producto.descripcion}</p>
      {/* Agrega más detalles según sea necesario */}
    </div>
);
}

export default DetalleProducto;