import React,{ useState } from 'react'
import '../Css/Mes_Messages.css'
import Header from '../Components/Header'
import Data_Message from '../Data/Data_Message'
import Data_Amis from '../Data/Data_Amis'
import '../Css/Section_Gauche_Message.css'
import '../Css/Section_Droite_Message.css' 
import Box_Message_Preview from '../Components/Box_Message_Preview'
import Head_Link from '../Components/Head_Link'
import Section_Recherche from '../Components/Section_Recherche'
import icon_boutton from '../Components/img_component/chercher.png'


function Mes_Messages() {
  const [data_amis,setData_Amis] = useState(Data_Amis)
  const [recherche, setRecherche] = useState('')
  
  const All_Friends = data_amis
  .filter((ami) =>
    ami.nomPersonne.toLowerCase().includes(recherche.toLowerCase()) || 
    ami.prenomPersonne.toLowerCase().includes(recherche.toLowerCase())
    )
  .map((ami) => (
    <Box_Message_Preview
      idPersonne={ami.idPersonne}
      nomPersonne={ami.nomPersonne}
      prenomPersonne={ami.prenomPersonne}
      imagePersonne = {ami.imagePersonne}
      texteMessage = {ami.texteMessage}
      
    />
  ))

  return (
    <body>
    <div id="page">
        <Header/>
        <main>
            <section className="section_recherche">
            <div className="top">
              <Head_Link titre = "Plus d'information sur la plantation"/>
            </div>
            <div className="bottom">
              <Section_Recherche titre_recherche="Recherche" placeholder="Votre recherche..." icon_boutton={icon_boutton} onRecherche={setRecherche}/>
                <div className="titre">
                    <h1>Discuté avec vos amis pour plus
                    de productivité</h1>
                </div>
            </div>
          </section>

          <section className="section_liste">
              <div className='top'>
                    <div className="mini_titre">
                        <h3>Liste des messsages</h3>
                    </div>
                    <div className="all_liste">
                          {All_Friends}
                    </div>
              </div>
              
          </section>


        
        </main>
    </div>
    </body>
  )
}

export default Mes_Messages