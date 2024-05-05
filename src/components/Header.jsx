import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Image from './../img/Perfil1.jpeg'

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    }

    const clickNav = (navData) => navData.isActive ? "active" : "";

    return (
        <header>
            <div className="logo">
                <div className="text-container">
                    <h1 title="Soy Mecatrónico">Dojanni Contreras</h1>
                    <p>Tecnólogo en Mecatrónica</p>
                </div>
                <img src={Image} alt="My Image" title="Guante desarrollado por Angel Gabrir"/>
            </div>
            <div className="hamburger" onClick={toggleNav}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className={`nav-bar ${isNavActive ? 'active' : ''}`}>
                <ul>
                    <li><NavLink to="/" className={clickNav}>Inicio</NavLink></li>
                    <li><NavLink to="/sobre" className={clickNav}>Sobre mi</NavLink></li>
                    <li><NavLink to="/blog" className={clickNav}>Blog</NavLink></li>
                    <li><NavLink to="/proyectos" className={clickNav}>Proyectos</NavLink></li>
                    <li><NavLink to="/enlaces" className={clickNav}>Enlaces</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;