//Import des images
import userIcon from "../images/utilisateur.png";
import mailIcon from "../images/enveloppe.png";
import lockIcon from "../images/bloquer.png";


export default function Connexion () {
    return (
        <div className="connexion">
            <div className="login-container">
                <div className="login-header"></div>
                <div className="text"><h2>Connectez-vous</h2></div>
            
                <div className="inputs"> Pseudo:
                    <div className="input"></div>
                    <img src={userIcon} alt="" width="20px"/>
                 <input type="text"/>
                </div>
                <div className="inputs"> Email:
                    <div className="input"></div>
                    <img src={mailIcon} alt="enveloppe" width="20px"/>
                    <input type="email"/>
                </div>
                <div className="inputs"> Mot de passe:
                    <div className="input"></div>
                    <img src={lockIcon} alt="" width="20px"/>
                    <input type="password"/>
                </div>
                <div className="submit-container">
                    <div className="submit">S'inscrire <span>Cliquez-ici!</span></div>
                    <div className="submit">Se connecter</div>
                </div>
                <div className="forgot-password">Vous avez perdu vos mots de passe?</div>
            </div>
        </div>
    )
}