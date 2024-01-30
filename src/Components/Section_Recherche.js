import React , { useState }from 'react'
import '../Css/Section_Recherche.css'
function Section_Recherche(props) {
  // Ajouter un état pour stocker la valeur du champ de saisie
  const [texteRecherche, setTexteRecherche] = useState('');

  // Gérer le changement de la valeur du champ de saisie
  const handleInputChange = (e) => {
    setTexteRecherche(e.target.value);
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Appeler la fonction de recherche passée en tant que prop avec la valeur de la recherche
    props.onRecherche(texteRecherche);
    setTexteRecherche('');
  };

  return (
    <div className="recherche_component">
    <h3>{props.titre_recherche}</h3>
    <form onSubmit={handleSubmit}>
        <input 
        className="text_input" 
        type="text"
        value={texteRecherche}
        onChange={handleInputChange}  
        placeholder={props.placeholder}
        />
        <input
         className="submit_input" 
         type="image" 
         src={props.icon_boutton}
         alt="Rechercher"
         />
    </form>
    </div>
  )
}

export default Section_Recherche