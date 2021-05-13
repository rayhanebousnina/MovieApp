import React from 'react'
import Navigation from './Nav'
import Footer from './Footer'

const Favorite = ({favorite}) => {
  return(
    <div>
        <Navigation favorite={favorite}/>
        <h1>Favorites</h1>
        <Footer/>
    </div>
   )

 }

export default Favorite