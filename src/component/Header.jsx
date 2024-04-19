import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/2.png";



export default function Header () {
    return(
        <div className="head">
            <div className="title-logo-container"><a href="http://localhost:3000">
                <img id="image-container" src={logo} alt="illustration représentant un petit dinosaure" width="250"/>
                <h1> Petit Matin </h1></a>
            </div>
            <p className="slogan">Chaque matin est une aventure excitante et bien orchestrée</p>
            <ul className="menu-list">
                <li><NavLink to="/presentation" className={({ isActive }) => ( isActive ? "activeLink" : "passiveLink" )}>Présentation</NavLink></li>
                <li><NavLink to="/quisommesnous" className={({ isActive }) => ( isActive ? "activeLink" : "passiveLink")}>Qui sommes nous ?</NavLink></li>
                <li><NavLink to="/faq" className={({ isActive }) => ( isActive ? "activeLink" : "passiveLink")}>FAQ</NavLink></li>
                <li><NavLink to="/connexion" className={({ isActive }) => ( isActive ? "activeLink" : "passiveLink")}>Connexion/Inscription</NavLink></li>
            </ul>
        </div>
    )
}