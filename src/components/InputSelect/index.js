import React, {useState} from 'react'
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import './style.css'

export default function InputSelect() {
  
  const [data, setData] = useState(["fresa","naranja", "naranja-piña"])
  const [search,setSearch] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const searchOptions = data.filter((option)=>{
    return  option.toLowerCase().includes(search.toLowerCase()) 
  })

  const handleSearch  = (value) => {
    setSearch(value)
  }

  const handleOpenOptions = () =>{
    setIsOpen(true)
  }
  const handleCloseOptions = () =>{
    setIsOpen(false)
  }

  const handleSelectOption = (value) => {
    handleSearch(value)
    handleOpenOptions()
  }



  return (
    <div className="container-field">
      <div className="container-field__top-label">Etiqueta</div>
      <div className="container-field__wrap-input">
        <input className="container-field__input-select" 
          type="text" 
          value={search} 
          onChange={(e)=>handleSearch(e.target.value)} 
          onFocus={handleOpenOptions}
          //onBlur={handleCloseOptions}
        />
        
      </div>
      <span>Debe seleccionar una opción</span>
      <ExpandMore/>
     
      {isOpen && (
        <div>
          {searchOptions.map((option)=>(
            <div key={option} onClick={()=>{handleSelectOption(option)}}>{option}</div>  
          ))}
        </div>
      )}
        

      
    </div>
  )
}
