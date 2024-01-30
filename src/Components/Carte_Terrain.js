import React from 'react'
import '../Css/Carte_Terrain.css'
function Carte_Terrain(props) {
  return (
    <div  className='carte_terrain'>
        <img src={props.image_source} alt=""/>
          <div className='carte_body'>
            <h4>{props.nomTerrain}</h4>
            <button>Parcelle:21</button>
          </div>
    </div>
  )
}

export default Carte_Terrain