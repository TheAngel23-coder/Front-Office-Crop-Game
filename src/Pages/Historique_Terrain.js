import React from 'react'
import Header from '../Components/Header'
import { useState } from 'react'
import Head_Link from '../Components/Head_Link'
import Section_Recherche from '../Components/Section_Recherche'
import '../Css/Historique_Terrain.css'
import icon_boutton from '../Components/img_component/chercher.png'
import Data_Terrain from '../Data/Data_Terrain'
import Carte_Terrain from '../Components/Carte_Terrain'


function Historique_Terrain() {
const [data_terrain,setData_Terrain] = useState(Data_Terrain)
const [recherche, setRecherche] = useState('')

const All_Terrains = data_terrain
.filter((terrain) =>
  terrain.nomTerrain.toLowerCase().includes(recherche.toLowerCase())
)
.map((terrain) => (
  <Carte_Terrain
    key={terrain.idTerrain}
    nomTerrain={terrain.nomTerrain}
    image_source={terrain.mainImage}
  />
))

  return (
    <body>
    <div id="historique_page">
     <Header />
        <main>
            <section className='section_list_terrain'>
                <div className='top_list_terrain'>
                    <h1> Les terrains  </h1>
                </div>
                <div className='bottom_list_terrain'>
                {All_Terrains}
                </div>

            </section>

            <section className='section_recherche_terrain'>
                <div className='head_link'>
                <Head_Link />
                </div>
                <div className='head_title'>
                <h1>Historique des terrains</h1>
                </div>
                <div className='body_recherche_terrain'>
                <Section_Recherche titre_recherche="Recherche" placeholder="Votre recherche..." icon_boutton={icon_boutton} onRecherche={setRecherche} />
                </div>
                 <div className='body_a_remplir'>
                </div>
                <div className='bottom_link'>
                <Head_Link titre="Comment avoir une belle recolte" lien="https://www.rouchette.com/blog/conseils/520-comment-avoir-une-belle-recolte-de-petits-fruits-cette-annee.html"/>
                </div>
            </section>
        </main>
    </div>
    </body>
  )
}

export default Historique_Terrain