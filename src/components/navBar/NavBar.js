import React from "react";
import 'styleNav.css';

const NavBar= () => {
  return (
    <nav className="nav">
        <div className="containerTitle">
            <h3>Camara Estudio</h3>
        </div>
            <ul className="navUl">
                <li className="navLi">Nuestros Servicios</li>
                <li className="navLi">Cursos</li>
                <li className="navLi">Nosotros</li>
                <li className="navLi">Contacto</li>
    </ul>
    </nav>
  );
}

export default NavBar

