import CardRadio from '../cards/CardRadio'

const GridRadios = ({radios,onPlay}) => {
  return (
     <div className='grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-4 pt-4 pb-4 mx-auto'>
            {radios.map((radio)=><CardRadio key={radio.id} radio={radio} onPlay={onPlay}/>)}
    </div>
  )
}

export default GridRadios