import React, { useState } from 'react';

const FloatingPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className={`bg-white shadow-xl rounded-lg transition-all duration-300 ${
        isOpen ? 'w-80 h-96' : 'w-16 h-16'
      }`}>
        {/* Botão de toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Conteúdo do painel */}
        {isOpen && (
          <div className="p-4 h-full overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Painel Flutuante</h2>
            <p className="text-gray-600">
              Este é um painel flutuante ancorado na parte inferior esquerda da tela.
              Você pode adicionar aqui qualquer conteúdo desejado, como formulários,
              informações ou controles interativos.
            </p>
            <div className="mt-4 space-y-2">
              <button className="w-full px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
                Ação 1
              </button>
              <button className="w-full px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
                Ação 2
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingPanel;