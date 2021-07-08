import React from 'react'
import {Link} from 'react-router-dom'
import {NavMenudiv, NavMenu} from './styling'



function NavBar() {
    return (
      <NavMenudiv>
      <NavMenu>
        <Link to="/MusicApp" style={{textDecoration:'none'}}> Home </Link>
      </NavMenu>
      <NavMenu>
        <Link to="/MusicApp/TopAlbum" style={{textDecoration:'none'}}> TopAlbum</Link>
      </NavMenu>
      <NavMenu>
        <Link to="/MusicApp/TopSong" style={{textDecoration:'none'}}> TopSong</Link>
      </NavMenu>
     
    </NavMenudiv>
    )
}

export default NavBar
