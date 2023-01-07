// import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/fwc2022-logo.png'

const Header = () => {
  return (
    <header className="App-header">
      <h1><img src={logo} alt='fifa world cup 2022 - logo' className='App-logo' /></h1>
      <nav>
        <Link to={'/'}>Home</Link>
        <NavLink to={'/teams'}>Teams</NavLink>
        <NavLink to={'/groups'}>Groups</NavLink>
        <NavLink to={'/matches'}>Matches</NavLink>
      </nav>
    </header>
  )
}

export default Header