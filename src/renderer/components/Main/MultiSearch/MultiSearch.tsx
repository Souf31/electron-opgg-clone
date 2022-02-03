import React from 'react';
import './MultiSearch.css'

import videoMP4 from '../../../../../public/assets/video-multisearch.mp4'

function MultiSearch() {
  return (
    <div className='main' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'100%', flexDirection:'column', fontSize:'16px', color: 'rgb(221,221,221)'}}>
    <video width={600} height={337} autoPlay muted loop style={{marginBottom: '48px', borderRadius: '12px'}}>
      <source src={videoMP4} type='video/mp4' />
    </video>
    <div>
       When you accept the game, it automatically switches to the <span style={{color: 'rgb(255,142,5', fontWeight: 'bold'}}>Multi-Search</span> page.
      </div>
    </div>


  )
}
export default MultiSearch
