import React from 'react'
import NavbarDesktop from './layout/navbar/NavbarDesktop'

function HOC({children}) {
  return (
    <NavbarDesktop>
        {children}
    </NavbarDesktop>
  )
}

export default HOC