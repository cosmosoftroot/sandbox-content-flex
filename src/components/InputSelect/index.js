import React, {useState, useRef} from 'react'
import { ExpandMore } from '@material-ui/icons';
import './style.css'

export default function InputSelect({
  data = [],
  autocomplete = true,
  label = "test",
  extraOption = false
}) {
  
  // Valor a buscar
  const [search,setSearch] = useState("") 
  
  // Estado del modal de las opciones
  const [isOpen, setIsOpen] = useState(false) 
  
  // El componente tiene el foco
  const [hasFocus, setHasFocus] = useState(false)
  
  const currentInput = useRef(false)


  const [msgWarning, setMsgWarning] = useState(false)
  const [optionSelected, setOptionSelected] = useState("")
  
  
  

  const searchOptions = data.filter((option)=>{
    return  option.toLowerCase().includes(search.toLowerCase()) 
  })
  

  const handleSearch  = (value) => {
    setSearch(value)
    setOptionSelected(extraOption ? value : "")

  }

  const handleOpenOptions = () =>{

    setIsOpen(true)
    setHasFocus(true)
    
  }


   const lostFocus = () => {
    setHasFocus(false)
  }

  const handleSelectOption = (value) => {
    console.log('select',value)
    setSearch(value)
    setOptionSelected(value)
    setTimeout(()=>{
      setIsOpen(false)
    },100)
  }

  const getAll = () => {
    setSearch("")
    setOptionSelected("")
  }

  const getCurrentInfo = () => {
    console.log(currentInput.current.value)
  }

  return (
    <div className="container-field">
      <div className={`container-field__top-label ${search.length > 0 || hasFocus ? "final": "initial"}`}>{label}</div>
      <div className="container-field__wrap-input" onClick={handleOpenOptions}>
        <input className="container-field__input-select" 
          type="text" 
          value={search} 
          onChange={(e)=>handleSearch(e.target.value)} 
          readOnly={!autocomplete}
          onFocus={handleOpenOptions}
          ref={currentInput}
          onBlur={lostFocus}
        />
        <ExpandMore onClick={getAll} className="container-field__btn-action"/>  

        
      </div>
      {/* {msgWarning && (
        <div className="container-field__msg-warning">Campo obligatorio*</div>

      )

      } */}
      
     
      {(isOpen && searchOptions.length > 0) && (
        <div>
          {searchOptions.map((option)=>(
            <div 
            className="container-field__select-option" 
            key={option} 
            onClick={()=>{handleSelectOption(option)}}
            >{option}</div>  
          ))}
        </div>
      )}
        

      
    </div>
  )
}
