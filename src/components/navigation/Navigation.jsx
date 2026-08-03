import React from 'react'
import Logo from './Logo'
import Icons from './Icons'
import Topbar from './Topbar'
import Menu from './Menubar'


const Navigation = () => {
  return (

    <div>

      <Topbar />

      <div className="flex justify-around py-2 bg-white">

        <Menu />
        <Logo />
        <Icons />

      </div>

    </div>
  )
}

export default Navigation
