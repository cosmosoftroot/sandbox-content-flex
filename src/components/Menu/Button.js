import React from 'react'

export default function Button({handleClick, isOpen}) {
  return (
    <div  className={`btn-action ${!isOpen ? "btn-collapse" : ""}`} onClick={handleClick}>
      
    </div>
  )
}
