import React from 'react'

const CardRadio = ({radio,onPlay}) => {
  return (
     <div className="w-[330px] md:w-[250px] lg:w-[250px] py-4 bg-white border hover:bg-gray-50 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
    
    <div className="flex flex-col items-center" onClick={()=>onPlay(radio)}>
      <img className="mb-3 w-[50px] h-[50px] rounded-[10px] shadow-lg" src={`${radio.imageUrl}`} alt="" />
      <h2>{radio.name}</h2>
     
    </div>
  </div>
  )
}

export default CardRadio