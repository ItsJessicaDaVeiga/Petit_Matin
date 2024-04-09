import Dino from "../images/1.png";

export default function Presentation () {
    return (
        <div className="text-container">
            <div className="text-item-presentation"> 
            <p> Bienvenue dans <span className="app-name">Petit Matin</span> - l'application incontournable des enfants âgés de 4 ans et plus pour gérer leur routine matinale de manière autonome et efficace!
            Dites adieu aux matins chaotiques et bonjour à des journées bien organisées grâce à notre application interactive conçue spécialement pour les enfants.</p>
            
            <img src={Dino} width="300"/>
            
            <p> <span className="app-name">Petit Matin</span> offre une expérience ludique et engageante, tout en aidant les enfants à développer des habitudes saines et responsables dès leur plus jeune âge en leur une todo list interactive qui les guide à travers chaque étape de sa routine matinale, du réveil au départ pour l'école. Avec des illustrations colorées et des instructions simples, même les plus jeunes enfants peuvent facilement suivre leur progression.</p>
            
            <img src=""></img>
            
            <p>En plus de la todo list, <span className="app-name">Petit Matin</span> comprend également un reminder pratique pour aider les enfants à rester sur la bonne voie. Des notifications amicales rappellent à l'enfant les tâches à accomplir, lui permettant ainsi de rester concentré et organisé, même lors des matins les plus mouvementés.</p>
            
            <img src=""></img>
            
            <p> Le meilleur de tout ? Tout ce que l'enfant a à faire, c'est cliquer sur le bouton magique "Je suis prêt" une fois sa routine terminée. Cela non seulement renforce un sentiment d'accomplissement, mais cela permet également aux parents de savoir que leur enfant est prêt à affronter la journée en toute confiance.</p>
                        
            <img src=""></img>
            
            <p>Téléchargez l'application <span className="app-name">Petit Matin</span> dès maintenant et transformez les matins stressants en moments de calme et de réussite pour toute la famille! </p>
            </div>
        </div>
    );
};