import React, { useEffect,useState } from 'react';
import { Spinner } from 'flowbite-react';
import api from '../api/api';
import GridRadios from '../components/grids/GridRadios';

import ModalPlayer from '../components/modals/ModalPlayer';
import Header from '../components/Header';


const Home2 = () => {
   const [radios,setRadios] = useState([]);
   const [radio,setRadio] = useState({});
   const [searchText,setSearchText] = useState('');
   const [isLoading,setIsLoading] = useState(false);
   const [isModalOpen,setIsModalOpen] = useState(false);

   const radiosFiltrado = radios.filter(
		radio => radio.name && radio.name.toLowerCase().includes(searchText.toLowerCase()),
	);

     useEffect(()=>{
       
    const getRadios = async () => {
        setIsLoading(true);            
        let response = await api.getRadios();
        if(response.ok){
          let json = await response.json();
           setRadios(json);
        }
        
       setIsLoading(false);
    }
    getRadios();
    
}, []);

const onPlay = (radio) => {
   setRadio(radio);
   setIsModalOpen(true);
} 

  return (
     <div className='w-full px-8 mx-auto'>
      <Header setSearchText={setSearchText}/>
     
      <div className='flex flex-col items-center pb-4'>
            {radiosFiltrado.length>0?<GridRadios radios={radiosFiltrado} onPlay={onPlay}/>:!isLoading?<h3 className='mt-10 text-gray-900 dark:text-white'>Rádios não encontradas.</h3>:<Spinner className='mt-10' color="info" aria-label="Info spinner example" size="xl" />}
      </div>
      <ModalPlayer isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} title={radio.name} radio={radio}/>
   </div>
  )
}

export default Home2