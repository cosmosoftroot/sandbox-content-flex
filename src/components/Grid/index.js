import React from 'react'

export default function Grid({data=[]}) {
  return (
    <div className="grid-container">

      {data.length > 0 && data.map((item, index)=>(
        <div>item</div>
      ))}
      
    </div>
  )
}
