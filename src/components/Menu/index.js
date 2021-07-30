import React, {useState} from 'react'
import Button from './Button'
import MenuPrimary from './MenuPrimary'
import MenuSecondary from './MenuSecondary'

import "./style.css"

export default function Menu() {
  const[isOpen, setIsOpen] = useState(true)

const toggleMenu = () => {
  setIsOpen(!isOpen)
}

  return (
    <div className="menu">
      <MenuPrimary isOpen={isOpen} />
      <MenuSecondary />
      <Button isOpen={isOpen} handleClick={toggleMenu}/>
    </div>
  )
}
