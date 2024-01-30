import React ,{ useState,useRef, useEffect } from 'react'
import Header from '../Components/Header'
import Head_Link from '../Components/Head_Link'
import Section_Recherche from '../Components/Section_Recherche'
import Box_Message from '../Components/Box_Message'
import user_image from '../Components/img_component/user.png'
import icon_search from '../Components/img_component/chercher.png'
import icon_send from '../Components/img_component/send.png'
import Data_Message from '../Data/Data_Message'
import '../Css/Section_Droite_Ma_Discussion.css'
function Ma_discussion(props) {
    //const idAmi = new URLSearchParams(props.location?.search).get('idPersonne') || '';
    const idAmi = '001P'
    const idMoi = '002P'
    const [data_message,setData_Message] = useState(Data_Message)


const getFilteredAndSortedMessages = (personneId) => {
    const filteredMessages = data_message.filter(
      (message) =>
        message.senderMessage.idPersonne === personneId ||
        message.receiverMessage.idPersonne === personneId
    );
  
    const sortedMessages = filteredMessages.sort(
      (a, b) => new Date(b.dateMessage) - new Date(a.dateMessage)
    );
  
    return sortedMessages;
  };
  
 
  // Composant qui utilise la fonction pour afficher les Box_Message

    const messages = getFilteredAndSortedMessages(idAmi);

    const All_message = messages.map((message) => (
        <Box_Message
          key={message.idMessage}
          user_image={
            // Choisissez l'image du sender ou du receiver en fonction de la personne connectée
            idAmi === message.senderMessage.idPersonne
              ? message.senderMessage.imagePersonne
              : message.receiverMessage.imagePersonne
          }
          direction={
            // Choisissez l'image du sender ou du receiver en fonction de la personne connectée
            idMoi === message.senderMessage.idPersonne
              ? 'reverse'
              :''
          }


          user_texte={message.texteMessage}
          // Ajoutez d'autres propriétés nécessaires ici
        />
      ))

    // Scroller le message à la fin //
    const topRef = useRef(null);

  useEffect(() => {
    // Assurez-vous que topRef.current existe avant d'accéder à ses propriétés
    if (topRef.current) {
      // Faites défiler jusqu'à la fin après le montage du composant
      topRef.current.scrollTop = topRef.current.scrollHeight;
    }
  }, []); // La dépendance vide assure que cela ne se déclenchera qu'une fois après le montage du composant
  //






return (
<div id="page">
    <Header/>
    <main>
        <section className="section_recherche">
            <div className="top">
            <Head_Link titre = "Plus d'information sur la plantation"/>
            </div>
            <div className="bottom">
            <Section_Recherche titre_recherche="Recherche" placeholder="Votre recherche..." icon_boutton={icon_search}/>
                <div className="titre">
                    <h1>Discuté avec vos amis pour plus
                    de productivité</h1>
                </div>
            </div>
        </section>

        <section className="section_liste">
        <div className='top' ref={topRef}>
        <div className="mini_titre">
                <h3>Liste des messsages</h3>
            </div>
            <div className="all_liste_ma_discussion">
                   {All_message}
            </div>
        </div>
            
            <div className='bottom'>
              <Section_Recherche icon_boutton = {icon_send} placeholder="Votre message..."/> 
            </div>
        </section>

    </main>
</div> 




  )
}

export default Ma_discussion