import React from 'react'
import '../Css/Acceuil.css'
import Header from '../Components/Header'
import Box_Culture from '../Components/Box_Culture'
import Head_Link from '../Components/Head_Link'
import Box_Message_Preview from '../Components/Box_Message_Preview'
import Data_Culture from '../Data/Data_Culture'
function Acceuil() {
    const All_Box_Cultures = Data_Culture.map((culture) => (
        <Box_Culture
          key={culture.idCulture}
          nomCulture={culture.nomCulture}
          mainImage={culture.mainImage}
          description = {culture.description}
        />
      ));


  return (
    <div>
    <div id="page_acceuil">
    <Header/>
        <div class="a_la_une_et_astuce">
            <section class="a_la_une">
                <div class="plus_information">
                <Head_Link titre ="Plus d'information sur la plantation"/>
                </div>
            <h1> Un Terrain optimal associé à une culture exeptionelle.</h1>
            </section>
            <section class="astuce">
            <div class="titre_astuce">
            <h4>Astuce</h4>
            </div>
                <div class="list_astuce">
                   <Box_Message_Preview titre="Cultivez à l'humidité" sous_titre="extrait de detail sur le sujet"/>
                   <Box_Message_Preview titre="Cultivez à l'humidité" sous_titre="extrait de detail sur le sujet"/>
                   <Box_Message_Preview titre="Cultivez à l'humidité" sous_titre="extrait de detail sur le sujet"/>
                   <Box_Message_Preview titre="Cultivez à l'humidité" sous_titre="extrait de detail sur le sujet"/>
                   <Box_Message_Preview titre="Cultivez à l'humidité" sous_titre="extrait de detail sur le sujet"/>
                   <Box_Message_Preview titre="Cultivez à l'humidité" sous_titre="extrait de detail sur le sujet"/>
                   <Box_Message_Preview titre="Cultivez à l'humidité" sous_titre="extrait de detail sur le sujet"/>
                   </div>
                <div class="voir_plus_astuce">
                <Head_Link titre ="Voir plus d'astuce" lien ="https://www.deco.fr/jardin-jardinage/potager-legume/79582-12-astuces-pour-reussir-son-potager"/>
                </div>
            </section>
        </div>
        <div class="list_cultures_section">
        <div class="list_cultures_bottom">


                <div class="culture_go">
                    <h1>Cultures</h1>
                    <div className='link_go'>
                    <Head_Link titre ="Go"/>
                    </div>
                </div>
                <div class="list_culture"> 
                    {All_Box_Cultures}
                         
                </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Acceuil