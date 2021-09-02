import React from 'react'
import InputSelect from '../InputSelect'
import "./style.css"


export default function FormTest() {
  return (
    <div className="container-form">
      <InputSelect 
        data={["fresa","naranja", "naranja-piña"]}
        label={"Frutas"}
      />
      <InputSelect />
      <InputSelect />
      <InputSelect />
    </div>
  )
}
