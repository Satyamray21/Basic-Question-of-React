import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
function Header() {
  return (
    <>
    <header>
        <nav>
            <Link to ='/about'>About</Link>
            <Link to ='/github'>Github</Link>
            <Link to ='Login'>Login</Link>
            <Link to = '/'>Home</Link>
        </nav>
    </header>
    </>
  )
}

export default Header
