//Import des fonctions depuis mes différentes dépendance
import React from 'react';


//Import de mes components et mes pages
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import Presentation from './page/presentation.jsx';
import Connexion from './page/connexion.jsx';



// Import de mes fichiers CSS
import './App.css';
import './css/header.css';
import './css/footer.css';
import './css/presentation.css';
import './css/connexion.css';


export default function App() {
  return (
      <div className="App">
        <Header />
        <Connexion />
        <Footer />
      </div>
  );
};
