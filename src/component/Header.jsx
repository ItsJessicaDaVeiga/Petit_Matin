import React from "react";
import logo from "../images/2.png";


export default function Header () {
    return(
        <div className="head">
            <img id="image-container" src={logo} alt="illustration représentant un petit dinosaure" width="150"/>
            <h1> Petit Matin </h1>
            <p className="slogan">Chaque matin est une aventure excitante et bien orchestrée</p>
            <ul className="menu-list">
                <li>Présentation</li>
                <li>Qui suis-je ?</li>
                <li>S'inscrire</li>
                <li>Connexion</li>
            </ul>
        </div>
    )
}