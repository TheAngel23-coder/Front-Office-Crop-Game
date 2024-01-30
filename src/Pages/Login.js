import React from 'react'
import '../Css/Login.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Login() {
    const handleRedirection = () => {
        // Vous pouvez également ajouter des logiques supplémentaires ici avant la redirection
        window.location.href = "/Acceuil";
      };


  return (
    <div className="main">
    
        <div className="box_container">
            <div className='left_box'>
                <div className='titre'>
                    <h1>
                    Login
                    </h1>
                </div>
                <p>
                Un terrain optimal à une culture exceptionelle.
                </p>
                
            </div>
            <div className='right_box'>
                <form className='login_form'>
                    <div className="input_container">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Votre email"/>

                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" id="password" name="password" placeholder="Votre mot de passe"/>

                    </div>
                    
                        <div className="button-container">
                            <button className='submit_button' type="submit">Se connecter</button>
                            <a type="button" href='acceuil' >Retour</a>
                        </div>
              </form>
            </div>
        </div>
    </div>


  )
}

export default Login