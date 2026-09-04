// studio/components/InstagramButton.tsx
'use client';

import { useState } from 'react';

interface InstagramButtonProps {
  usuario: string;
  origem?: string;
  children?: React.ReactNode;
  className?: string;
}

export function InstagramButton({ 
  usuario, 
  origem = 'Instagram Button',
  children,
  className = ''
}: InstagramButtonProps) {
  
  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    if (!clicked) {
      setClicked(true);
      try {
        await fetch("http://127.0.0.1:8000/api/lead/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: "Lead Instagram - Cardeal Studio",
            telefone: "00000000000",
            origem: origem,
            mensagem: "Clique no botão do Instagram",
          }),
        });
      } catch (error) {
        console.error('Erro ao registrar:', error);
      }
    }
    
    window.open(`https://instagram.com/${usuario}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition ${className}`}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
      </svg>
      {children || 'Siga no Instagram'}
    </button>
  );
}