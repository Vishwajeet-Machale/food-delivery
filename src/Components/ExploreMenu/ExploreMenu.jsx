import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='exploreMenu'>
       <h1>Explore our menu</h1>
       <p className='explore-menu-text'>
       Choose from a diverse menu featuring delectable array of dishes.Our mission is to satisfy
       </p>
       <div className="explore-menu-list">
        menu_list
       </div>
    </div>
  )
}

export default ExploreMenu
