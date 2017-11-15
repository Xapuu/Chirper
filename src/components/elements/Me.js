import React from 'react'

import Chirp from './Chirp'
import UserCard from './UserCard'

let Me = () => {
  return (
    <section id='viewMe'>
      <div className='content'>
        <div className='chirper'>
          <h2 className='titlebar'>Pesho</h2>
          <UserCard />
          <div id='myStats' className='user-details'>
            <span>0 chirps</span>
            <span>1 following</span>
            <span>0 followers</span>
          </div>
        </div>
        <div id='myChirps' className='chirps'>
          <h2 className='titlebar'>Chirps</h2>
          <h1>CHirp</h1>
        </div>
      </div>
    </section>
  )
}
export default Me
