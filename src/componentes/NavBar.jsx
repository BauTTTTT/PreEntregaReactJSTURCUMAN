import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
return (
    <nav>
    <div className="logo">
        <Link to="/">Mi Tienda</Link>
    </div>
    <div className="cart">
    <Link to="/">Catálogo</Link>
        
    </div>
    </nav>
);
}

export default Navbar;
