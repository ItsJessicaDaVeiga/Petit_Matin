//Import des fonctions depuis mes différentes dépendance
import React from 'react';
import {Routes, Route} from 'react-router-dom';



//Import de mes components et mes pages
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import Presentation from './page/presentation.jsx';
import Connexion from './page/connexion.jsx';
import Quisommesnous from './page/quisommesnous.jsx';
import Faq from './page/faq.jsx';



// Import de mes fichiers CSS
import './App.css';
import './css/header.css';
import './css/footer.css';
import './css/presentation.css';
import './css/connexion.css';
import FAQ from './page/faq.jsx';


export default function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/presentation" element={ <Presentation/> }/> 
          <Route path="/connexion" element={ <Connexion/>} />
          <Route path="/faq" element={ <FAQ/>} />
          <Route path="/quisommesnous" element= {<Quisommesnous/>} />          
        </Routes>
        <Footer />
      </div>
  );
};
