//Import des images
import mailIcon from "../images/enveloppe.png";
import lockIcon from "../images/bloquer.png";



export default function Connexion () {
    return (
            <div className="login-container">
                <div className="login-header">
                    <div className="text"><h2>Connectez-vous</h2></div>
                    <div className="underline"></div>
                </div>

                <div className="inputs"> 
                
                    <div className="input">
                    <img src={mailIcon} alt="enveloppe" width="20px"/>
                    <input type="email" placeholder="Adresse e-mail ou numéro de tél"/>
                    </div>
                
                    <div className="input">
                        <img src={lockIcon} alt="cadena" width="20px"/>
                        <input type="password" placeholder="Mot de passe"/>
                    </div>
                </div>
                <div className="forgot-password">Vous avez oublié votre mot de passe? <span>Cliquez-ici!</span></div>
            
            <div className="submit-container">
                <div className="submit">S'inscrire</div>
                <div className="submit">Se connecter</div>
            </div>

            </div>
    )
}