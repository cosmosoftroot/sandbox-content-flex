import React from 'react'
import "./style.css"

export default function MenuPrimary({isOpen = true}) {
  return (
    <div className={`menu-primary ${!isOpen ? "menu-primary-collapse" : ""}`}>
      Primary
    </div>
  )
}
