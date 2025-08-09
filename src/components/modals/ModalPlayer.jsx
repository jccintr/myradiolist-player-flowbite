import React,{useEffect} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const ModalPlayer = ({ isOpen, onClose, title,radio }) => {

  useEffect(() => {
    if (isOpen) {
      // Impede a rolagem do body
      document.body.style.overflow = 'hidden';
    } else {
      // Restaura a rolagem do body
      document.body.style.overflow = 'auto';
    }

    // Limpeza ao desmontar o componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 ">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button  onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">✕</button>
        </div>
        <div className="p-4 flex justify-center items-center">

          <img className="mr-2 w-[80px] h-[80px] rounded-[10px] shadow-lg" src={`${radio.imageUrl}`} alt="" />
          <AudioPlayer
            src={radio.streamUrl}
            autoPlay={true}
            showJumpControls={false}
            customAdditionalControls={[]}
            preload='none'
            volume={0.3}

          />
         
        </div>
        <div className="p-4  flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalPlayer;