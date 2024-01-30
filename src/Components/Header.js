import React from 'react'
import '../Css/Header.css'
import logo from './img_component/logo_crop_1.png'
import user from './img_component/user.png'
function Header() {
  return (
    <header>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <nav>
                <ul>
                    <li><a href="acceuil">Acceuil</a></li>
                    <li><a href="message">Mes messages</a></li>
                    <li><a href="historique">Historique terrain</a></li>
                    <li><a href="login">Login</a></li>
                    <li><a href="recherche_terrain">Resultat</a></li>
          
                </ul>
                <div className="profile">
                    <img src={user} alt=""/>
                </div>
            </nav>
    </header>
  )
}

export default Header